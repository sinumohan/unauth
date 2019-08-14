// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ButtonPrimary, TextMessage } from '../../core';
import { Routes } from '../../../../lib';


export default class Home extends Component {
  render() {
    return (
      <div className={'container'}>
        <Link to={Routes.IMPORT}>
          <ButtonPrimary>Import Cookies</ButtonPrimary>
        </Link>
        <Link to={Routes.EXPORT}>
          <ButtonPrimary>Export Cookies</ButtonPrimary>
        </Link>
      </div>
    );
  }
}
