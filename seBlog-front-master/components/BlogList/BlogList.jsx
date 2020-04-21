import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogOverview from '../BlogOverview'
import { connect } from 'react-redux'
import * as blogListAction from '../../ducks/blogList'
import { bindActionCreators } from 'redux'
import InfiniteScroll from 'react-infinite-scroller'
import { BLOG_PAGING } from '../../constants'
import './_BlogList.scss'
class BlogList extends React.Component {
  constructor(props) {
    super(props)
    this.page = 0
  }
  handleLoadMore = page => {
    const { BlogListAction, blogList } = this.props
    const { categoryID } = blogList.categoryID

    this.page += 1
    if (categoryID !== -1) {
      BlogListAction.getBlogListByCategory({ categoryID, page: this.page, size: BLOG_PAGING.SIZE })
    }
    BlogListAction.getBlogList({ page: this.page, size: BLOG_PAGING.SIZE })
  }
  componentDidMount(prevProps, prevState) {
    const { blogList, BlogListAction } = this.props
    if (blogList.content.length === 0) {
      BlogListAction.getBlogList({ page: BLOG_PAGING.PAGE, size: BLOG_PAGING.SIZE })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.blogList.categoryID !== prevProps.blogList.categoryID) {
      this.page = 0
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.blogList !== this.props.blogList || nextProps.blogList.categoryID !== this.props.blogList.categoryID
    )
  }

  render() {
    const { content, isMoreData } = this.props.blogList
    return (
      <div className="blogList" style={{ flex: 3 }}>
        <h2 className="title">블로그 포스팅</h2>
        <p className="techBlog">SE 기술 블로그 내용</p>
        {(content && content.length > 0 && (
          <InfiniteScroll
            pageStart={0}
            loadMore={this.handleLoadMore}
            hasMore={isMoreData}
            initialLoad={false}
            className={'infinite'}
          >
            {content && content.map((contents, index) => <BlogOverview key={index} contents={contents} />)}
          </InfiniteScroll>
        )) || <div className="empty">해당되는 내용이 없습니다.</div>}

      </div>
    )
  }
}
BlogList.propTypes = {
  blogList: PropTypes.object,
  BlogActions: PropTypes.object,
}
export default connect(
  state => ({
    blogList: state.blogList,
  }),
  dispatch => ({
    BlogListAction: bindActionCreators(blogListAction, dispatch),
  }),
)(BlogList)
