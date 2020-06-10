import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import './todo.css'

interface TodoRowProps {
    title: string;
    onClickHandler: ()=> void;
}

export const TodoRow: React.FC<TodoRowProps> = ({ title, onClickHandler }) => {
    return (
        <div className="todo-row">
            <h2>{title}</h2>
            <button onClick={onClickHandler} className="todo-row-btn" type="button"><FontAwesomeIcon icon={faCheck} /></button>
        </div>
    );
}