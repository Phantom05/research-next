import React, { Component } from 'react'
import './_BlogTitleWrite.scss'

const titleWrite = ({ onTitleChange, onBlurBlogTitle }) => {
  return (
    <div className="titleArea">
      <input placeholder="제목 입력해주세요." onChange={onTitleChange} onBlur={onBlurBlogTitle} />
    </div>
  )
}

export default titleWrite
