import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';

const Styled = {
  MainHeader: styled.div`
  border-bottom:1px solid #ececec;
  padding: 10px;
    .nav__list{
      display:inline-block;
      padding:15px 20px;
      text-decoration:none;
      color:#333;
      &:hover{
        text-decoration:underline;
      }
    }
  `
}

class MainHeader extends Component {
  render() {
    return (
      <Styled.MainHeader>
        <Link href="/">
          <a className="nav__list">Home</a>
        </Link>
        <Link href="/about">
          <a className="nav__list">About</a>
        </Link>
        <Link href="/search?keyworld=somthing">
          <a className="nav__list">Search</a>
        </Link>
        <Link href="/ssr-test" prefetch >
          <a className="nav__list">SSR 테스트</a>
        </Link>
      </Styled.MainHeader>
    );
  }
}

export default MainHeader;