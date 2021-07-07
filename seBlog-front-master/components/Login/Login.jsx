import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import { bindActionCreators } from 'redux'
import * as userActions from '../../ducks/user'
import './Login.scss'

class Login extends Component {
  constructor(props) {
    super()
    this.userID = null
    this.userPassword = null
    this.inputID = React.createRef()
    this.inputPassword = React.createRef()
  }

  handleLogin = () => {
    if (this.inputID.current.value === '') {
      alert('Please, Enter your login ID')
      return
    }

    if (this.inputPassword.current.value === '') {
      alert('Please, Enter your password.')
      return
    }

    this.props.UserActions.userSignin({ userName: this.userID, password: this.userPassword })
  }

  handleUserIdChange = e => {
    this.userID = e.target.value
  }

  handleUserPasswordChange = e => {
    this.userPassword = e.target.value
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.isSuccess === false) {
      alert('Login Failure.')
    }

    if (this.props.user.isLogin === true) {
      location.href = '/'
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline>
          <div className="login-template">
            <span className="login-title">
              <h1>SE.LOG</h1>
            </span>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              inputRef={this.inputID}
              autoFocus
              onChange={this.handleUserIdChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={this.inputPassword}
              onChange={this.handleUserPasswordChange}
            />
            <Button fullWidth variant="contained" color="primary" className="submit" onClick={this.handleLogin}>
              login
            </Button>
            <Grid container className="grid-container">
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {'Sign up'}
                </Link>
              </Grid>
            </Grid>
          </div>
        </CssBaseline>
      </Container>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(Login)
