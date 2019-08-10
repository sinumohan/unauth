import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';


export default class Back extends Component {
  render() {
    return (
      <Link to={this.props.to} className={styles.back}>
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
    )
  }
}