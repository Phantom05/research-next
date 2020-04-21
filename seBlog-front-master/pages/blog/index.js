import Layout from '../../components/Layout'
import BlogComponent from '../../components/Blog'
import { getBlogList } from '../../ducks/blogList'
import { BLOG_PAGING } from '../../constants'

const Blog = props => {
  return (
    <Layout selectedTab={'Blog'}>
      <BlogComponent />
    </Layout>
  )
}
Blog.getInitialProps = async ({ req, reduxStore }) => {
  await reduxStore.dispatch(getBlogList({ page: 0, size: BLOG_PAGING.SIZE }))
  return {}
}
export default Blog
