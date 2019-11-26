import React, { Component } from 'react';
import styled from 'styled-components';

const Styled ={
  PlainTemplate:styled.div`
    .header{
      border-bottom:1px solid #eee;
    }
  `
}
class PlainTemplate extends Component {
  render() {
    const {header,children} = this.props;
    return (
      <Styled.PlainTemplate>
        {header && <header className="header">{header}</header>}
        <main>{children}</main>

      </Styled.PlainTemplate>
    );
  }
}

export default PlainTemplate;