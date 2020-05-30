const initState = {
    blogs:[] as Array<any>
}

export default (state = initState, action: any)=>{
    switch(action.type){
        case 'LOAD_BLOG':
            return{
                ...state,
                blogs: action.payload.blogs
            }
        default:
            return state
    }
}