import React, { Component } from 'react';


export default class InputText extends Component {
  render() {
    return (
      <div>
        <input 
          className={'input'} 
          id={this.props.id || 'input'} 
          name={this.props.name || 'input'}
          placeholder={this.props.placeholder} 
          defaultValue={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}
