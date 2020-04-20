import React from "react";
import Head from "next/head";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {PlainTemplate} from 'components/base/template';

import { getUser } from "../store/actions/usersActions";

function User(props) {
  const { usersReducer } = useSelector(
    ({ usersReducer }) => ({ usersReducer })
  );
  const {user} = usersReducer;
  return (
    <PlainTemplate>
      <Head>
        <title>{user.name}</title>
      </Head>

      <h1>{user.name}</h1>
    </PlainTemplate>
  )
}


User.getInitialProps = async ctx => {
  const { id } = ctx.query;
  await ctx.store.dispatch(getUser(id))
  // return {}
};



export default User;
