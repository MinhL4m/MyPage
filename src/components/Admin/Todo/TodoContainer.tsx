import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadTodo } from '../../../redux/action/action';
import { Todo } from './Todo'
import { todoRef } from '../../../firebase/firebase';

interface TodoContainerProps {

}

function mapStateToProps(state: any) {
    return {
        todos: state.todo.todos
    };
}

const TodoLogic: React.FC<{ todos: any, loadTodo: any }> = ({ todos, loadTodo }) => {
    useEffect(() => {
        loadTodo()
    })

    const [todo, setTodo] = useState('')

    return (<div className="todo row">
        <Todo todo={todo} todoList={todos}
            onChangeHandler={(ev) => setTodo(ev.target.value)}
            onClickHandler={(id) => {
                return () => {
                    todoRef.doc(id).delete().then(function () {
                        loadTodo()
                    })
                }
            }}
            onAddHandler={() => { todoRef.doc().set({ todo: todo }) }} />
    </div>);
}

export const TodoContainer = connect(mapStateToProps, { loadTodo })(TodoLogic)