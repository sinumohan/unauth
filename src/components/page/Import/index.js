// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import Spinner from 'react-md-spinner';

import { Constants, Routes, Messages } from '../../../../lib';
import { NavBackButton, ButtonPrimary, TextMessage } from '../../core';
import styles from './style.css';


class Import extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      showMessage: false,
      type: '',
      message: ''
    };
    this.handleOnBack = this.handleOnBack.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.importListeners = this.importListeners.bind(this);
    this.textMessageTick = this.textMessageTick.bind(this);
  }

  importListeners() {
    ipcRenderer.on(Constants.EVENTS.IMPORT.COMPLETE, () => {
      this.setState({
        loading: false,
        type: Constants.STATUS.SUCCESS,
        showMessage: true,
        message: Messages.IMPORT_SUCCESS
      });

      this.textMessageTick();
    });

    ipcRenderer.on(Constants.EVENTS.IMPORT.ERROR, (event, { message }) => {
      this.setState({
        loading: false,
        type: Constants.STATUS.ERROR,
        showMessage: true,
        message: message || Messages.IMPORT_ERROR
      });

      this.textMessageTick();
    });
  }

  handleOnClick() {
    this.importListeners();
    this.setState({
      loading: true
    });

    ipcRenderer.send(Constants.EVENTS.IMPORT.START);
  }

  handleOnBack() {
    this.props.history.goBack();
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
        <div className='wrapper'>
          <div>
            <ButtonPrimary onClick={this.handleOnClick}>Choose File</ButtonPrimary>
          </div>
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


export default withRouter(Import);