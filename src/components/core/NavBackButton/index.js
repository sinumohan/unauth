import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './style.css';


const backStyle = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3))'
};

export default class NavBackButton extends Component {
  render() {
    return (
      <Link to={this.props.to} className={styles.back}>
        <FontAwesomeIcon style={backStyle} size='2x' icon={faArrowLeft} />
      </Link>
    )
  }
}