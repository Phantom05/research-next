import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Styled = {
  PlainHeader: styled.div`
  border-bottom:1px solid #eee;
    .nav__list{
      display:inline-block;
      text-decoration:none;
      padding:15px 20px;
      color:#333;
      &:hover{
        text-decoration:underline;
      }
    }
  `
}
class PlainHeader extends Component {
  render() {
    return (
      <Styled.PlainHeader>
        <Link href="/">
          <a className="nav__list">Home</a>
        </Link>
        <Link href="/about">
          <a className="nav__list">About</a>
        </Link>
        <Link href="/post">
          <a className="nav__list">Post</a>
        </Link>
      </Styled.PlainHeader>
    );
  }
}

export default PlainHeader;

