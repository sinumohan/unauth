// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';

import { BackButton, ButtonPrimary, InputText } from '../../core';
import styles from './style.css';


class Export extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: '',
      errorMessage: '',
      error: false
    };
    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.exportCookieListener = this.exportCookieListener.bind(this);
  }


  handleOnChange(event) {
    const { currentTarget: { name, value }} = event
    if (name && value) {
      this.setState({
        [name]: value
      });
    }
  }


  handleOnClick() {
    // Register listener
    this.exportCookieListener();

    // Send export event
    ipcRenderer.send('export:start', this.state.domain);
  }


  exportCookieListener() {
    ipcRenderer.on('export:complete', () => {
      this.setState({
        errorMessage: '',
        error: false
      });
    })

    ipcRenderer.on('export:failed', () => {
      this.setState({
        errorMessage: 'Failed to export',
        error: true
      });
    });
  }


  render() {    
    return (
      <div className={styles.wrapper}>
        <div className={styles.back}>
          <BackButton to={'/'} />
        </div>
        <div>
          <InputText 
            id='domain'
            name='domain'
            placeholder='Domain (Eg: prime.com)'
            value={this.state.domain}
            onChange={this.handleOnChange}
          /> 
          <ButtonPrimary onClick={this.handleOnClick}>Export</ButtonPrimary>
        </div>
      </div>
    );
  }
}


export default withRouter(Export)