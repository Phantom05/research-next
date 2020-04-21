import React from 'react'
import BlogWriteTemplate from './BlogWriteTemplate'
import Header from './Header'
import BlogPane from './BlogPane'
import BlogWriteNotifications from '../BlogWriteNotifications'
import { connect } from 'react-redux'
import { initAllEvent } from '../../ducks/event'
import './_BlogWrite.scss'

class BlogWrite extends React.Component {
  render() {
    return <BlogWriteTemplate notifications={<BlogWriteNotifications />} header={<Header />} editor={<BlogPane />} />
  }
  componentDidMount() {
    document.querySelector('body').className = 'white'
  }
  componentWillUnmount() {
    this.props.initAllEvent()
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    initAllEvent: () => dispatch(initAllEvent()),
  }),
)(BlogWrite)
