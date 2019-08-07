// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FileImport from './FileImport';
import routes from '../constants/routes';
import styles from './Import.css';

type Props = {};

export default class Import extends Component<Props> {
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
        <div className={styles.wrapper}>
          <div className={styles.Input}>
            <button disabled type="text" id="input" className={styles.button}>
              Import Cookies File
            </button>
          </div>
        </div>
        <FileImport />
      </div>
    );
  }
}
