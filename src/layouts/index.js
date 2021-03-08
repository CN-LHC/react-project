import React, { Component } from 'react';

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <header>
          <img src="https://lh3.googleusercontent.com/ogw/ADGmqu95NjYnl8lM0M0bvSxJCib8WGOpql0gX23Xerdq=s32-c-mo" />
        </header>
        <content>
          {this.props.children}
        </content>
      </div>
    );
  }
}
