import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './_BlogOverview.scss'
import { SERVER } from '../../constants'

const BlogOverview = ({ contents }) => {

  return (
    <Link as={`/blog/${contents.id}`} href={`/blog/blogDetail?blogNo=${contents.id}`}>
      <div className="blogOverview-list">
        <div className="blogOverview-list-contents">
          <div className = "blogOverview-list-top">
            <div className = "blogOverview-list-title">
              <h2>
                {contents.title}
              </h2>
            </div> 
            <div className="blogOverview-list-writer">
              <a className="userImage">
                <img src="/upload/user.png" alt="" width="50px;" />
              </a>
              <div className="userName">
                <h3 className="name">by {contents.createdBy}</h3>
                <p className="date">{contents.createdDate}</p>
              </div>
            </div>
          </div>
          <img className="img-fluid" src={`${SERVER}/upload/1111.png`} width="100%" alt="" />
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>{contents.title}</strong>
          </h3>

        </div>
      </div>
    </Link>
  )
}

BlogOverview.propTypes = {
  contents: PropTypes.object,
}

export default BlogOverview
