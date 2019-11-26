import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Styled ={
  MainHeader:styled.div`
    .nav__list{
      display:inline-block;
      padding:10px 20px;
      color:#333;
      text-decoration:none;
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
        <Link href="/"  >
          <a className="nav__list">Home</a>
        </Link>
        <Link href="/about"  >
          <a className="nav__list">About</a>
        </Link>
        <Link href="/search" >
          <a className="nav__list">Search</a>
        </Link>
        <Link href="/sst-test">
          <a className="nav__list">SSR 테스트</a>
        </Link>
      </Styled.MainHeader>
    );
  }
}

export default MainHeader;