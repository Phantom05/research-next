import React, { Component } from 'react';

class PlainTemplate extends Component {
  render() {
    const {header, children} = this.props;
    return (
      <div>
        {header && <header>{header}</header>}
        {children && <main>{children}</main>}
      </div>
    );
  }
}

export default PlainTemplate;