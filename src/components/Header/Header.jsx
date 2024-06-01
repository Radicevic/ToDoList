import {AddTodo} from "../AddTodo/AddTodo";

import './Header.css';

export function Header ({ title }) {
    return (
        <div className='header'>
            <h1 className='title'>{title}</h1>
            <AddTodo />
        </div>
    )
}
