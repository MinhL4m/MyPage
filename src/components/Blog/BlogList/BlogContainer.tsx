import React, { useState } from 'react'
import { connect } from "react-redux"
import { addTodo } from '../../../redux/action'
import { Todo } from './Todo'
import { Blog } from './Blog'


const tempData = [
        {
            title: 'Redux 101',
            date:'20/May/2020',
            description: 'As an dummy like me, I take me some time to wrap my head around redux...',
            id:'asd'
        },
        {
            title: 'Redux 101',
            date:'20/May/2020',
            description: 'As an dummy like me, I take me some time to wrap my head around redux...',
            id:'asd'
        },
        {
            title: 'Redux 101',
            date:'20/May/2020',
            description: 'As an dummy like me, I take me some time to wrap my head around redux...',
            id:'asd'
        },
    ]

const tempTodo = [
        {
                todo:'Clear feature a'
        },
        {
                todo: 'Refractor feature b'
        }
]

interface Todo {
        todo: string
}

interface Blog {
        title: string,
        date: string,
        description: string,
        id: string
}

function mapDispatchToProps(dispatch: any){
        return {
                addTodo: (todoList: Array<Todo>) =>  dispatch(addTodo(todoList))
        }
}

function mapStateToProps(state: any){
        return {
                todoList: state.todoList
        }
}


const BlogLogic: React.FC<{todoList:any, addTodo:any}> = ({todoList,addTodo}) => {
        
        const [blogList, setBlogList] = useState([] as Array<Blog>)

        return (
        <div className="blog row">
                <Todo todoList={[]}/>
                <Blog error={false} homeBlogList={tempData}/>
        </div>
        );
}

export const BlogContainer = connect(mapStateToProps,mapDispatchToProps)(BlogLogic)