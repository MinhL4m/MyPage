export const ACTION = {
    HOME_BLOG: 'HOME_BLOG',
    TODO: 'TODO'
}

interface HomeBlog {
    title: string,
    date: string,
    description: string,
    url: string
}

interface Todo{
    todo: string
}

export function addHomeBlog(homeBlogList: Array<HomeBlog>){
    return {
        type: ACTION.HOME_BLOG,
        payload:{
            homeBlogList: homeBlogList
        }
    }
}

export function addTodo(todoList: Array<Todo>){
    return {
        type: ACTION.TODO,
        payload:{
            todoList: todoList
        }
    }
}