import React from 'react';
import { PlainTemplate } from 'components/base/template';
import {LoginForm} from 'components/common/form';

function Login() {

  return (
    <PlainTemplate >
      <h1>Login</h1>
      <LoginForm />
    </PlainTemplate>
  );
}

export default Login;