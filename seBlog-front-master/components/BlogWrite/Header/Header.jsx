import React, { Component } from 'react'
import { MDBBtn, MDBNotification, MDBContainer } from 'mdbreact'
import { connect } from 'react-redux'
import { blogNotifyError } from '../../../ducks/event'
import { bindActionCreators } from 'redux'
import * as blogActions from '../../../ducks/blog'
import './_Header.scss'
import BlogCategorySelect from '../../BlogCategorySelect'
import BlogTitleWrite from '../BlogTitleWrite'

class Header extends Component {
  constructor(props) {
    super(props)
    this.title = null
  }

  handleSave = evt => {
    evt.preventDefault()
    const { categoryID, content, title, thumbnail } = this.props.blog
    if (!categoryID || !content || !title) {
      this.props.blogNotifyError(true)
      return
    } else {
      const { blogNotifyError, BlogActions } = this.props

      blogNotifyError(false)
      BlogActions.postBlog({
        categoryID,
        content,
        title,
        createdBy: 'jyb',
        thumbnail,
      })
    }
  }

  handleTitleChange = evt => {
    this.title = evt.target.value
  }

  handleBlurBlogTitle = () => {
    const { BlogActions } = this.props
    BlogActions.addBlogTitle(this.title)
  }

  handleClickBackButton = evt => {
    history.back()
    return false
  }

  componentDidUpdate(prevProps, prevState) {
    const { BlogActions, blog } = this.props
    const { isSuccess } = blog
    if (!prevProps.blog.isSuccess && isSuccess) {
      alert('게시물이 정상적으로 업로드 되었습니다.')
      BlogActions.initState()
      location.href = '/blog'
    }
  }

  componentWillUnmount() {
    const { BlogActions } = this.props
    BlogActions.initState()
    this.title = null
  }

  render() {
    return (
      <>
        <div className="blogWriteSection">
          <BlogCategorySelect />
          <div className="actions">
            <button className="backButton" onClick={this.handleClickBackButton}>
              뒤로가기
            </button>
            <button className="saveButton" style={{ marginLeft: 20 }} onClick={this.handleSave}>
              저장하기
            </button>
          </div>
        </div>
        <BlogTitleWrite onBlurBlogTitle={this.handleBlurBlogTitle} onTitleChange={this.handleTitleChange} />
      </>
    )
  }
}

export default connect(
  state => ({
    blog: state.blog,
  }),
  dispatch => ({
    blogNotifyError: isError => dispatch(blogNotifyError(isError)),
    BlogActions: bindActionCreators(blogActions, dispatch),
  }),
)(Header)
