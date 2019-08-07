// @flow
import React, { Component } from 'react';
import styles from './Home.css';

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
        <button disabled type="text" id="input" className={styles.button}>
          Import Cookies File
        </button>
        <button disabled type="text" id="input" className={styles.button}>
          Export Cookies File
        </button>
      </div>
    );
  }
}
