import React, { Component } from 'react'
import './BlogWriteTemplate.scss'
import { MDBContainer, MDBNotification } from 'mdbreact'
import PropTypes from 'prop-types'

class BlogWriteTemplate extends Component {
  render() {
    const { header, editor, notifications } = this.props

    return (
      <>
        {notifications}
        <div className="editor-template">
          {header}
          <div className="pane editor">{editor}</div>
        </div>
      </>
    )
  }
}

BlogWriteTemplate.propTypes = {
  header: PropTypes.any,
  editor: PropTypes.any,
  categorySelect: PropTypes.any,
  notifications: PropTypes.any,
}

export default BlogWriteTemplate
