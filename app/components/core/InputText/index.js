import React, { Component } from 'react';
import styles from './style.css';


export default class InputText extends Component {
  render() {
    return (
      <div>
        <input 
          id={this.props.id || 'input'} 
          name={this.props.domain || 'input'}
          className={styles.input} 
          placeholder={this.props.placeholder} 
        />
      </div>
    )
  }
}
