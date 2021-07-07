const BLOG_SAVE_EVENT_FLAG = 'event/BLOG_SAVE_EVENT_FLAG'
const BLOG_NOTIFY_ERROR_FLAG = 'event/BLOG_NOTIFY_ERROR_FLAG'
const INIT_EVENT = 'event/INIT_EVENT'

const initialState = {
    blogSave: false,
    blogNotifyError: false,
}
export default function reducer( state = initialState, action) {
    switch(action.type) {
        case BLOG_SAVE_EVENT_FLAG: 
            return {
                ...state,
                blogSave: action.isSave,
            }
        case BLOG_NOTIFY_ERROR_FLAG:
            return {
                ...state,
                blogNotifyError: action.isError,
            }
        case INIT_EVENT: 
            return initialState
        default:
            return state
    }
}

export function blogSave(isSave) {
    return {
        isSave,
        type: BLOG_SAVE_EVENT_FLAG
    }
}

export function blogNotifyError(isError) {
    return {
        isError,
        type:BLOG_NOTIFY_ERROR_FLAG
    }
}

export function initAllEvent() {
    return {
        type: INIT_EVENT,
    }
}