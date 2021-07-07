import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../ducks/category'
import * as blogActions from '../../ducks/blog'
import './_BlogCategorySelect.scss'
import { Select } from 'antd'
import 'antd/dist/antd.css'
import BlogThumbnail from './BlogThumbnail'

class BlogCategorySelect extends React.Component {
  constructor(props) {
    super(props)
  }
  handleChange = value => {
    const { BlogActions } = this.props
    BlogActions.addBlogCategory(value)
  }

  componentDidMount(prevProps, prevState) {
    const { CategoryActions } = this.props
    CategoryActions.setCategories()
  }

  render() {
    const { Option } = Select
    const { category } = this.props
    return (
      <div className="categorySelectTemplate">
        <div className="categoryTitle">CATEGORY</div>
        <div className="categorySelect">
          <Select
            defaultValue="카테고리를 선택해주세요."
            style={{ width: 180, marginLeft: '2em' }}
            onChange={this.handleChange}
          >
            {category &&
              category.map(cate => <Option key={`${cate.id}`} value={`${cate.id}`}>{`${cate.categoryName}`}</Option>)}
          </Select>
        </div>

        <BlogThumbnail />
      </div>
    )
  }
}
export default connect(
  state => ({
    category: state.category.category,
  }),
  dispatch => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
    CategoryActions: bindActionCreators(categoryActions, dispatch),
  }),
)(BlogCategorySelect)
