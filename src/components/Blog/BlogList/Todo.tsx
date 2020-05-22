import React from 'react'
import './blog.css'

interface TodoProps {
        todoList: Array<Todo>
}

interface Todo {
        todo: string
}

export const Todo: React.FC<TodoProps> = ({ todoList }) => {
        return (
                <aside className="col-3 todo-list">
                        <h2 className="section-header">My Todo List</h2>
                        {todoList.length>0?
                                todoList.map((todo) => {
                                        return (
                                                <div className="todo">
                                                        <p>- {todo.todo}</p>
                                                </div>
                                        )
                                }): <p>Nothing need to be done</p>
                        }
                </aside>
        );
}