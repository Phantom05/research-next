import React, { Component } from 'react'
import Header from '../Header'
import Menu from '../Menu'
import './_Layout.scss'
import ScrollButton from '../ScrollButton'

const Layout = ({ children, selectedTab }) => {
  return (
    <div className="App">
      <Header />
      <Menu {...{ selectedTab }} />
      {children}
      <ScrollButton />
    </div>
  )
}
export default Layout
