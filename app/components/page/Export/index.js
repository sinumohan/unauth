// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { BackButton, ButtonPrimary, InputText } from '../../core';
import routes from '../../../constants/routes';
import styles from './style.css';


class Export extends Component {
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
      <div className={styles.wrapper}>
        <BackButton onClick={this.handleBack} />
        <div className={styles.Input}>
          <InputText 
            id='domain'
            name='domain'
            placeholder='Domain (Eg: prime.com)'
          /> 
          <ButtonPrimary>Export</ButtonPrimary>
        </div>
      </div>
    );
  }
}


export default withRouter(Export)