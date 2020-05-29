import {combineReducers} from 'redux'

import authUser from './reducer/authUser'
import blog from './reducer/blog'
import todo from './reducer/todo'

export default combineReducers({
    authUser,
    blog,
    todo
})