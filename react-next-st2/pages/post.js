import React, { Component } from 'react';
import { PlainTemplate } from 'components/base/template';
import PlainHeader from 'components/base/header/PlainHeader';
import { getPost } from 'lib/api';
import styled from 'styled-components';
import cx from 'classnames';


const Styled = {
  Post: styled.div`
    .user__list{
      border-bottom:1px solid #eee;
      padding:10px;
    }
    .label{
      display:inline-block;
      width:60px;
    }
  `
}

class Post extends Component {
  render() {
    const { list } = this.props;
    console.log(list);
    return (
      <Styled.Post>
        <PlainTemplate header={<PlainHeader />}>
          {list.length !== 0 && list.map(
            user => <div key={user.id} className={cx('user__list')}>
              <div><label htmlFor="" className={cx('label')}>Name : </label> {user.username} </div>
              <div><label htmlFor="" className={cx('label')}>Email :</label> {user.email}</div>
              <div><label htmlFor="" className={cx('label')}>Phone :</label> {user.phone}</div>
            </div>
          )}
        </PlainTemplate>
      </Styled.Post>
    );
  }
}

export default Post;



Post.getInitialProps = async () => {
  console.log('wow');
  const { data } = await getPost();
  if (data) { }
  return data
    ? { list: data }
    : { list: [] }
}