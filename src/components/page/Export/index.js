// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import Spinner from 'react-md-spinner';

import { Constants, Messages, Routes } from '../../../../lib';
import { NavBackButton, ButtonPrimary, InputText, TextMessage } from '../../core';
import styles from './style.css';


class Export extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: '',
      showMessage: false,
      type: '',
      message: '',
      loading: false
    };

    this.handleOnBack = this.handleOnBack.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.exportListener = this.exportListener.bind(this);
    this.textMessageTick = this.textMessageTick.bind(this);
  }


  handleOnBack() {
    this.props.history.goBack();
  }

  handleOnChange(event) {
    const { currentTarget: { name, value } } = event
    if (name && value) {
      this.setState({
        [name]: value
      });
    }
  }


  handleOnClick() {
    // Register listener
    this.exportListener();
    this.setState({
      loading: true
    });

    // Send export event
    ipcRenderer.send(Constants.EVENTS.EXPORT.START, this.state.domain);
  }


  exportListener() {
    ipcRenderer.on(Constants.EVENTS.EXPORT.COMPLETE, (event, path) => {
      this.setState({
        loading: false,
        showMessage: true,
        message: Messages.EXPORT_SUCCESS,
        type: Constants.STATUS.SUCCESS
      });

      this.textMessageTick();
    });

    ipcRenderer.on(Constants.EVENTS.EXPORT.ERROR, (event, message) => {
      this.setState({
        loading: false,
        showMessage: true,
        message: message || Messages.EXPORT_ERROR,
        type: Constants.STATUS.ERROR
      });

      this.textMessageTick();
    });
  }

  textMessageTick() {
    this.timer = setTimeout(() => {
      this.setState({
          showMessage: false
      });
    }, 3000);
  }


  render() {
    return (
      <div className='container'>
        <NavBackButton to={Routes.HOME} onClick={this.handleOnBack} />
        <div>
          <InputText
            id='domain'
            name='domain'
            placeholder='Domain (Eg: prime.com)'
            value={this.state.domain}
            onChange={this.handleOnChange}
          />
        </div>
        <div className='wrapper'>
          <ButtonPrimary onClick={this.handleOnClick}>Export</ButtonPrimary>
          {this.state.loading && (
            <div className='spinner'>
              <Spinner />
            </div>
          )}
          {this.state.showMessage && (
            <TextMessage type={this.state.type}>{this.state.message}</TextMessage>
          )}
        </div>
      </div>
    );
  }
}


export default withRouter(Export)