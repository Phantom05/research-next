import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Router from 'next/router'
import NProgress from 'nprogress'
import WithReduxStore from '../util/withReduxStore'

Router.events.on('routeChangeStart', url => NProgress.start())
Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]')
    const timestamp = new Date().valueOf()
    els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp
  }
  NProgress.done()
})
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default WithReduxStore(MyApp)
