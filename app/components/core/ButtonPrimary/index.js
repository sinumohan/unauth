import React, { Component } from 'react';
import styles from './style.css';


export default class ButtonPrimary extends Component {
  render() {
    return (
      <div>
        <button id={this.props.id || 'button'} className={styles.button} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </div>
    )
  }
}
