import React, { Component } from 'react'
import './_Menu.scss'
import Link from 'next/link'
import { SIDE_BAR_LINK } from '../../constants'
import PropTypes from 'prop-types'

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <div className="MainMenu">
          <div className="logo">
            <Link href="/">
              <a className="name">SE.LOG</a>
            </Link>
          </div>
          <div className="menuList">
            {SIDE_BAR_LINK.map(menu => (
              <Link href={`${menu.link}`} key={menu.name}>
                <a aria-selected={menu.name === this.props.selectedTab}>{menu.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}
Menu.propTypes = {
  selectedTab: PropTypes.string,
}
export default Menu
