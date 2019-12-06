import React, { Component } from 'react';
import Link from 'next/link';

class PlainHeader extends Component {
  render() {
    return (
      <div>
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