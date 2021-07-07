import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

class BlogCodeBlock extends PureComponent {
  static defaultProps = {
    language: null,
  }

  render() {
    const { language, value } = this.props
    return (
      <SyntaxHighlighter language={language} style={dracula} showLineNumbers={true}>
        {value}
      </SyntaxHighlighter>
    )
  }
}

BlogCodeBlock.propTypes = {}

export default BlogCodeBlock
