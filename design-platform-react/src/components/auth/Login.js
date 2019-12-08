import React, { Component } from 'react';
import css from './Login.scss';
import { Form } from 'react-bootstrap';
import cx from 'classnames';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

class Login extends Component {

  render() {
    const {
      failLogin,
      password,
      email,
      focus,
      remember,
      devMode,
      handleChange,
      handleFocus,
      handleSubmit,
      handleTestButton
    } = this.props;
    
    return (
      <div >
        <h1 className={css.login__title}>SIGN IN</h1>
        {devMode &&
          <div style={{ "marginBottom": "20px" }}>
            <Button
              onClick={handleTestButton}
              name="designer"
              variant="secondary"
              style={{ 'marginRight': '10px' }}>Designer</Button>
            <Button
              onClick={handleTestButton}
              name="client"
              variant="secondary">Client</Button>
          </div>
        }

        <div className={cx(css.login__input_row,css.info)}>
          <div className={cx(css.login__info_tx, { [css.on]: failLogin })}>
            아이디나 비밀번호가 올바르지 않습니다 틀립니다.
          </div>
        </div>

        <div className={css.login__input_row}>
          <div className={cx(css.login__input_box, { [css.on]: focus === 'email' })}>
            <input
              type="text"
              className={css.login__input}
              placeholder="Email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={handleChange}
              onFocus={handleFocus} />
          </div>
        </div>
        <div className={css.login__input_row}>
          <div className={cx(css.login__input_box, { [css.on]: focus === 'password' })} >
            <input
              type="password"
              className={css.login__input}
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              onFocus={handleFocus} />
          </div>
        </div>
        <div className={css.login__checkbox}>
          <Form.Check
            custom
            type={'checkbox'}
            id={`custom-checkbox`}
            label={`Remember Me`}
            name="remember"
            onChange={handleChange}
            checked={remember}
          />
        </div>

        <div className={css.login__forget_box}>
          <p className={css.login__forget_tx}>Forgot password?
          <Link href="resetPassword">
            <a className={css.login__forget_link}>RESET PASSWORD</a>
          </Link>
          </p>
        </div>

        <div className={css.login__btn_box}>
          <button className={cx(css.login__btn)} onClick={handleSubmit}>SIGN IN</button>
        </div>

        <div className={css.login__signup_btn_box}>
          <Link href="signup">
            <a className={css.login__signup_btn}>Create Accrount</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;