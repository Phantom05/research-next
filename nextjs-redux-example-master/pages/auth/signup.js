import React from 'react';
import { PlainTemplate } from 'components/base/template';
import {SignUpForm} from 'components/common/form';

function SignUp() {

  return (
    <PlainTemplate >
      <h1>SignUp</h1>
      <SignUpForm />
    </PlainTemplate>
  );
}

export default SignUp;