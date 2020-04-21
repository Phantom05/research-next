import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'
import { SERVER } from '../constants'

const ADD_BLOG_CONTENT = 'blog/ADD_BLOG_CONTENT'
const ADD_BLOG_CATEGORY = 'blog/ADD_BLOG_CATEGORY'
const ADD_BLOG_TITLE = 'blog/ADD_BLOG_TITLE'
const ADD_BLOG_THUMBNAIL = 'blog/ADD_BLOG_THUMBNAIL'
const POST_BLOG = 'blog/POST_BLOG'
const GET_BLOG_DETAIL = 'blog/GET_BLOG_DETAIL'
const UPDATE_BLOG_DETAIL = 'blog/UPDATE_BLOG_DETAIL'
const INIT_STATE = 'blog/INIT_STATE'

const initialState = {
  categoryID: null,
  content: null,
  date: null,
  title: null,
  createdBy: null,
  isSuccess: false,
  isFail: false,
  id: null,
  thumbnail: null,
}

export const addBlogTitle = createAction(ADD_BLOG_TITLE, title => {
  return {
    title,
  }
})
export const addBlogContent = createAction(ADD_BLOG_CONTENT, content => {
  return {
    content,
  }
})
export const addBlogCategory = createAction(ADD_BLOG_CATEGORY, categoryID => {
  return {
    categoryID,
  }
})
export const addBlogThumbnail = createAction(ADD_BLOG_THUMBNAIL, thumbnail => {
  return {
    thumbnail,
  }
})
export const postBlog = createAction(POST_BLOG, blog => {
  return axios.post(`${SERVER}/api/blogs`, blog)
})
export const getBlogDetail = createAction(GET_BLOG_DETAIL, blogNo => {
  return axios.get(`${SERVER}/api/blogs/${blogNo}`)
})
export const updateBlogDetail = createAction(UPDATE_BLOG_DETAIL, blog => {
  return axios.put(`${SERVER}/api/blogs/${blog.id}`, blog)
})
export const initState = createAction(INIT_STATE)

export default handleActions(
  {
    [ADD_BLOG_CONTENT]: (state, action) => {
      return {
        ...state,
        content: action.payload.content,
      }
    },
    [ADD_BLOG_CATEGORY]: (state, action) => {
      return {
        ...state,
        categoryID: action.payload.categoryID,
      }
    },
    [ADD_BLOG_TITLE]: (state, action) => {
      return {
        ...state,
        title: action.payload.title,
      }
    },
    [ADD_BLOG_THUMBNAIL]: (state, action) => {
      return {
        ...state,
        thumbnail: action.payload.thumbnail,
      }
    },
    [INIT_STATE]: (state, action) => {
      return initialState
    },
    ...pender({
      type: POST_BLOG,
      onSuccess: (state, action) => {
        return {
          ...state,
          ...action.payload.data,
          isSuccess: true,
        }
      },
      onError: (state, action) => {
        return {
          ...state,
          isFail: true,
        }
      },
    }),
    ...pender({
      type: GET_BLOG_DETAIL,
      onSuccess: (state, action) => {
        return {
          ...state,
          ...action.payload.data,
        }
      },
    }),
    ...pender({
      type: UPDATE_BLOG_DETAIL,
      onSuccess: (state, action) => {
        return {
          ...state,
        }
      },
    }),
  },
  initialState,
)
