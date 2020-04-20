import React from 'react';
import { useRouter } from 'next/router';
import { PlainTemplate } from 'components/base/template';
import {
  SIGNUP_PAGE,
  LOGIN_PAGE,
} from 'constants/navigation';
import {LoginForm,SignUpForm} from 'components/common/form';

function AuthPage() {
  const router = useRouter();
  const {pathname} = router.query;

  const pageRender={
    [SIGNUP_PAGE]:SignUpForm,
    [LOGIN_PAGE]:LoginForm
  }
  const RenderComponent = pageRender[pathname];
  return (
    <PlainTemplate >
      <h1>{pathname}</h1>
      <RenderComponent />
    </PlainTemplate>
  );
}

export default AuthPage;