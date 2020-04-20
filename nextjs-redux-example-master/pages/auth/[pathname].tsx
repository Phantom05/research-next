import React from 'react';
import { useRouter } from 'next/router';
import { PlainTemplate } from 'components/base/template';

function AuthPage() {
  const router = useRouter();
  const {pathname} = router.query;

  console.log(pathname,'pathname');

  return (
    <PlainTemplate >
      <h1>{pathname}</h1>
    </PlainTemplate>
  );
}

export default AuthPage;