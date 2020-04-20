import React from "react";
import Head from "next/head";
import { connect } from "react-redux";

import Layout from "../components/MyLayout";

import { getUser } from "../store/actions/usersActions";

class User extends React.PureComponent {
  render() {
    const { user } = this.props;
    return (
      <Layout>
        <Head>
          <title>{user.name}</title>
        </Head>

        <h1>{user.name}</h1>
      </Layout>
    );
  }
}

User.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const { user } = await ctx.store.dispatch(getUser(id));

  return { user };
};

const mapStateToProps = state => ({
  user: state.usersReducer.user
});

export default connect(mapStateToProps)(User);
