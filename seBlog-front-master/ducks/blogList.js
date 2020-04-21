import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'
import { SERVER } from '../constants'

const initialState = {
  content: [],
  pageable: null,
  totalPages: 0,
  totalElements: 0,
  isMoreData: false,
  categoryID: {
    categoryID: -1,
  },
}

const GET_BLOG_LIST = 'blogList/GET_BLOG_LIST'
const GET_BLOG_LIST_BY_CAETGORY = 'blogList/GET_BLOG_LIST_BY_CAETGORY'
const SET_BLOG_CATEGORY = 'blogList/SET_BLOG_CATEGORY'

export const getBlogList = createAction(GET_BLOG_LIST, blogParams => {
  return axios.get(`${SERVER}/api/blogs`, {
    params: {
      sort: 'id,desc',
      ...blogParams,
    },
  })
})

export const getBlogListByCategory = createAction(GET_BLOG_LIST_BY_CAETGORY, blogParams => {
  return axios.get(`${SERVER}/api/categories/${blogParams.categoryID}/blogs`, {
    params: {
      sort: 'id,desc',
      ...blogParams,
    },
  })
})
export const setBlogCategory = createAction(SET_BLOG_CATEGORY, categoryID => {
  return {
    categoryID,
  }
})
export default handleActions(
  {
    ...pender({
      type: GET_BLOG_LIST,
      onSuccess: (state, action) => {
        const { pageable, content } = action.payload.data
        const { pageNumber } = pageable
        return {
          ...state,
          ...action.payload.data,
          content: pageNumber === 0 ? content : [...state.content, ...content],
          isMoreData: action.payload.data.content.length > 0,
        }
      },
    }),
    ...pender({
      type: GET_BLOG_LIST_BY_CAETGORY,
      onSuccess: (state, action) => {
        const { pageable, content } = action.payload.data
        const { pageNumber } = pageable
        return {
          ...state,
          ...action.payload.data,
          content: pageNumber === 0 ? content : [...state.content, ...content],
          isMoreData: action.payload.data.content.length > 0,
        }
      },
    }),
    [SET_BLOG_CATEGORY]: (state, action) => {
      return {
        ...state,
        categoryID: action.payload.categoryID,
      }
    },
  },
  initialState,
)
