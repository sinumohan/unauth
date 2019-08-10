// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const { ipcRenderer } = require('electron')

import { BackButton, ButtonPrimary, InputText } from '../../core';
import styles from './style.css';


const exportCookieListener = () => {
  ipcRenderer.on('export:cookies', (event, data) => {
    console.log('Inside render', data);
  })
}

class Export extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: ''
    };
    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
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
    exportCookieListener();

    // Send export event
    ipcRenderer.send('click:export', this.state.domain);
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