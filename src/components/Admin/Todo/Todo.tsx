import React from 'react'
import { TodoRow } from './TodoRow';
import { Input } from '../../common/input/Input';

interface TodoProps {
    todo: string;
    onChangeHandler: (ev: any) => void;
    todoList: Array<Todo>;
    onClickHandler: (id: string) => () => void;
    onAddHandler: (ev: any) => void
}

interface Todo {
    todo: string,
    id: string
}

export const Todo: React.FC<TodoProps> = ({ todo, onChangeHandler, todoList, onClickHandler, onAddHandler }) => {
    return (
        <>
            <div className="todo-add">
                <Input id="todo" label="Add Todo" onChangeHandler={onChangeHandler} type="text" value={todo} />
                <button className="todo-btn" onClick={onAddHandler}>Add</button>
            </div>
            {todoList.map((todo) => {
                return (
                    <TodoRow title={todo.todo}
                        onClickHandler={onClickHandler(todo.id)}
                        key={todo.id} />
                )
            })}
        </>
    );
}