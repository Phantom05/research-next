import React, { Component } from 'react';
import css from './Login.scss';
import { Form } from 'react-bootstrap';
import cx from 'classnames';
import Link from 'next/link';

class Login extends Component {
  state = {
    failLogin: false,
    failPassword: false
  }
  handleClick = () => {
    this.setState({
      failLogin: true,
      failPassword: true,
    })
  }
  render() {
    const { failLogin, failPassword } = this.state;

    return (
      <div className={css.login__box}>
        <h1 className={css.login__title}>Sign In</h1>
        <div className={css.login__input_row}>
          <div className={css.login__input_box}>
            <input type="text" className={css.login__input} placeholder="Email" />
          </div>
          <div className={cx(css.login__info_tx, { [css.on]: failLogin })}>
            이메일이 틀립니다.
          </div>
        </div>
        <div className={css.login__input_row}>
          <div className={cx(css.login__input_box)}>
            <input type="password" className={css.login__input} placeholder="Password" />
          </div>
          <div className={cx(css.login__info_tx, { [css.on]: failPassword })}>
            비밀번호를 확인해주세요
          </div>
        </div>
        <div className={css.login__checkbox}>
          <Form.Check
            custom
            type={'checkbox'}
            id={`custom-checkbox`}
            label={`Remember Me`}
          />
        </div>

        <div className={css.login__forget_box}>
          <p className={css.login__forget_tx}>Forgot password?
            <span className={css.login__forget_link}>RESET PASSWORD</span>
          </p>
        </div>

        <div className={css.login__btn_box}>
          <button className={cx(css.login__btn)} onClick={this.handleClick}>SIGN IN</button>
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