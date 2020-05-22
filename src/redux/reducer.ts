import {ACTION} from '../redux/action'

const initState = {
    homeBlogList: [],
    todoList:[]
}

interface ACTION_REDUCER{
    type: string,
    payload:any
}

function reducer(state = initState, action: ACTION_REDUCER){
    switch(action.type){
        case ACTION.HOME_BLOG:
            return{
                ...state,
                homeBlogList: action.payload.homeBlogList
            }
        case ACTION.TODO:
            return{
                ...state,
                todoList: action.payload.todoList
            }
        default:
            return state
    }
}

export default reducer