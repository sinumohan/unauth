// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';

import { BackButton, ButtonPrimary, InputText } from '../../core';
import styles from './style.css';


class Import extends Component {
  constructor(props) {
    super(props);

    this.handleBack = this.handleBack.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    ipcRenderer.send('import:start');
  }

  handleBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className={styles.container}>
        <BackButton to='/' onClick={this.handleBack} />
        <div className={styles.wrapper}>
          <div className={styles.Input}>
            <ButtonPrimary onClick={this.handleOnClick}>Choose File</ButtonPrimary>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Import);