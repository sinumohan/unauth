import React, { Component } from 'react';
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './style.css';


const iconStyle = {
  marginLeft: '20px',
  marginRight: '20px',
};

const classes = {
  'error': 'textError',
  'success': 'textSuccess'
};

const icons = {
  'error': faTimes,
  'success': faCheck
};

export default class TextMessage extends Component {
  render() {
    return (
      <div className={classes[this.props.type]}>
        <FontAwesomeIcon style={iconStyle} icon={icons[this.props.type]} />
        <span>{this.props.children}</span>
      </div>
    )
  }
}
