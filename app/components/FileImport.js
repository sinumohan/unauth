import React, { Component } from 'react';
import { FilePicker } from 'react-file-picker';
import styles from './FileImport.css';

export default class FileImport extends Component<Props> {
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
        <FilePicker
          extensions={['json']}
          onChange={this.onChange}
          onError={this.onErrorMessage}
        >
          <button className={styles.button}>Import</button>
        </FilePicker>
      </div>
    );
  }
}
