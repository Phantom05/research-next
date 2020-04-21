import React from 'react'
import BlogList from '../BlogList'
import './_Blog.scss'
import BlogCategory from '../BlogCategory'

const Blog = ({}) => {
  return (
    <>
      <div className="Blog">
        <BlogList />
        <BlogCategory />
      </div>
    </>
  )
}

export default Blog
