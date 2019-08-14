// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import Spinner from 'react-md-spinner';

import { Constants, Messages, Routes } from '../../../../lib';
import { NavBackButton, ButtonPrimary, InputText } from '../../core';
import styles from './style.css';


class Export extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: '',
      errorMessage: '',
      error: false,
      loading: false
    };

    this.handleOnBack = this.handleOnBack.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.exportCookieListener = this.exportCookieListener.bind(this);
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
    this.exportCookieListener();
    this.setState({
      loading: true
    });

    // Send export event
    ipcRenderer.send(Constants.EVENTS.EXPORT.START, this.state.domain);
  }


  exportCookieListener() {
    ipcRenderer.on(Constants.EVENTS.EXPORT.COMPLETE, () => {
      this.setState({
        loading: false,
        errorMessage: '',
        error: false
      });
    });

    ipcRenderer.on(Constants.EVENTS.EXPORT.ERROR, () => {
      this.setState({
        loading: false,
        errorMessage: Messages.EXPORT_FAILED,
        error: true
      });
    });
  }


  render() {
    return (
      <div className={styles.wrapper}>
        <NavBackButton to={Routes.HOME} onClick={this.handleOnBack} />
        <div className={styles.container}>
          <InputText
            id='domain'
            name='domain'
            placeholder='Domain (Eg: prime.com)'
            value={this.state.domain}
            onChange={this.handleOnChange}
          />
          <ButtonPrimary onClick={this.handleOnClick}>Export</ButtonPrimary>
        </div>
        {this.state.loading && (
          <div className='spinner'>
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}


export default withRouter(Export)