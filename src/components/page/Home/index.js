// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ButtonPrimary } from '../../core';


export default class Home extends Component {

  onChange(fileObject) {
    console.log('Loaded');
    console.log(fileObject);
    console.log(fileObject.path);
  }

  onErrorMessage(errorMessage) {
    console.log('Error');
    console.log(errorMessage);
  }

  render() {
    return (
      <div className={'container'}>
        <Link to={'/import'}>
          <ButtonPrimary>Import Cookies</ButtonPrimary>
        </Link>
        <Link to={'/export'}>
          <ButtonPrimary>Export Cookies</ButtonPrimary>
        </Link>
      </div>
    );
  }
}
