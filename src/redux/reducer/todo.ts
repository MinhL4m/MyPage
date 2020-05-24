const initState = {
    todos:[]
}

export default (state = initState, action: any)=>{
    switch(action.type){
        case 'VIEW_TODO':
            return {
                ...state,
                todos: action.payload.todos
            }
    }
}