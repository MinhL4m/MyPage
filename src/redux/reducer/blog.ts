const initState = {
    blogs:[],
    blog:{}
}

export default (state = initState, action: any)=>{
    switch(action.type){
        case 'LOAD_BLOG':
            return{
                ...state,
                blogs: action.payload.blogs
            }
        case 'VIEW_BLOG':
            return{
                ...state,
                blog: action.payload.blog
            }
        default:
            return state
    }
}