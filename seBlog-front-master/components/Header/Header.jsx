import React, { Component } from 'react'
import './_Header.scss'
import User from '../User'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="Mainheader" />
        <User />
      </header>
    )
  }
}

export default Header
