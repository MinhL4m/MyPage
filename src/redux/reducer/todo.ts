const initState = {
    todos:[]
}

export default (state = initState, action: any)=>{
    switch(action.type){
        case 'LOAD_TODO':
            return {
                ...state,
                todos: action.payload.todos
            }
        default:
            return state
    }
}