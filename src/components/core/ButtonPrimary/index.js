import React, { Component } from 'react';


export default class ButtonPrimary extends Component {
  render() {
    return (
      <div>
        <button id={this.props.id || 'button'} className={'button'} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </div>
    )
  }
}
