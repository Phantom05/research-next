import { Component } from 'react';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/base/header/MainHeader';

class Search extends Component {
  render() {
    const {url} = this.props;
    console.log(url.query.keyworld);
    return (
      <PlainTemplate header={<MainHeader/>}>
        <form action="/search">
          <input type="text" name="keyworld"/>
        </form>
        Search
      </PlainTemplate>
    );
  }
}

export default Search;