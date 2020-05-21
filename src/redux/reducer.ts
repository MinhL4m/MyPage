import {ACTION} from '../redux/action'

const initState = {
    homeBlogList: []
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
        default:
            return state
    }
}

export default reducer