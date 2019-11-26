import React, { Component } from 'react';
import {PlainTemplate} from 'components/base/template';
import {MainHeader} from 'components/base/header';
import { withRouter } from 'next/router'

class Search extends Component {
  render() {
    const {router} = this.props;
    console.log(router.query);
    return (
      <PlainTemplate header={<MainHeader />}>
        Search
      </PlainTemplate>
    );
  }
}

export default withRouter(Search);