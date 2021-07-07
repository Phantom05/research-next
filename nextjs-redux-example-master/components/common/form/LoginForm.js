import React from 'react';
import {LoginFormStyle} from './LoginForm.style';

function LoginForm(props) {
  return (
    <LoginFormStyle>
      <div>
        <input type="text"/>
      </div>
      <div>
        <input type="text"/>
      </div>
      <div>
        <button>LOGIN</button>
      </div>
    </LoginFormStyle>
  );
}

export default LoginForm;