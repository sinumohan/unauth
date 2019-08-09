// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// import ChromeCookie from 'chrome-cookie';
import { BackButton, ButtonPrimary, InputText } from '../../core';
import routes from '../../../constants/routes';
import styles from './style.css';

class Export extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: ''
    };
    
    this.handleOnChange = this.handleOnChange.bind(this);
  }


  handleOnChange(event) {
    const { currentTarget: { name, value }} = event
    if (name && value) {
      this.setState({
        [name]: value
      });
    }
  }


  handleOnClick() {

  }


  render() {
    // const CCookie = new ChromeCookie()
    // console.log(CCookie.get('prime'));
    return (
      <div className={styles.wrapper}>
        <div className={styles.back}>
          <BackButton to={routes.HOME} />
        </div>
        <div>
          <InputText 
            id='domain'
            name='domain'
            placeholder='Domain (Eg: prime.com)'
            value={this.state.domain}
            onChange={this.handleOnChange}
          /> 
          <ButtonPrimary>Export</ButtonPrimary>
        </div>
      </div>
    );
  }
}


export default withRouter(Export)