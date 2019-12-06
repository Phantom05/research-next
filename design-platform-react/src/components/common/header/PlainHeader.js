import React, { Component } from 'react';
import Link from 'next/link';
import "./header.scss";

class PlainHeader extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <br />
        <Link href='/about'>
          <a>about</a>
        </Link>
      </div>
    );
  }
}

export default PlainHeader;