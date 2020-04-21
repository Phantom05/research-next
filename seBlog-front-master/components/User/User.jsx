import React, { Component } from 'react'
import './_User.scss'
import DropdownMenu from './DropdownMenu'
class User extends Component {
  constructor(props) {
    super(props)
    this.state = { isPanned: false }
  }

  handleUserDropdown = () => {
    this.setState(prevState => ({
      isPanned: !prevState.isPanned,
    }))
    return false
  }
  render() {
    return (
      <>
        <div className="info" onClick={this.handleUserDropdown}>
          <a className="page">
            <img src={'/upload/user.png'} alt="user" className="img" />
          </a>
          {this.state.isPanned && <DropdownMenu />}
        </div>
      </>
    )
  }
}

export default User
