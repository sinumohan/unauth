// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ButtonPrimary } from '../../core';
import routes from '../../../constants/routes';
import styles from './style.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

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
      <div className={styles.container}>
        <Link to={routes.IMPORT}>
          <ButtonPrimary>Import Cookies</ButtonPrimary>
        </Link>
        <Link to={routes.EXPORT}>
          <ButtonPrimary>Export Cookies</ButtonPrimary>
        </Link>
      </div>
    );
  }
}
