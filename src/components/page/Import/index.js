// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { BackButton, ButtonPrimary, InputText } from '../../core';
import styles from './style.css';


class Import extends Component {
  constructor(props) {
    super(props);

    this.handleBack = this.handleBack.bind(this);
  }

  onChange(fileObject) {
    console.log('Loaded');
    console.log(fileObject);
    console.log(fileObject.path);
  }

  onErrorMessage(errorMessage) {
    console.log('Error');
    console.log(errorMessage);
  }

  handleBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className={styles.container}>
        <BackButton onClick={this.handleBack} />
        <div className={styles.wrapper}>
          <div className={styles.Input}>
            <ButtonPrimary>Import Cookies File</ButtonPrimary>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Import);