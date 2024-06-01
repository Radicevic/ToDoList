import {useEffect, useState} from "react";

import {Button} from "../Button/Button";

import './AddTodo.css';

const loggedUserId = 13;

export function AddTodo(props) {
    const [todoTitle, setTodoTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    function onAdd () {
        // read title from state
        const title = todoTitle;
        // prepare request payload
        const newTodo = { todo: title, completed: false, userId: loggedUserId };
        // send POST request
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        })
            .then(res => res.json())
            .then((createdTodo) => console.log('Created: ', createdTodo));

    }

    function onTodoTitleChange (e) {
        setTodoTitle(e.target.value);
    }

    useEffect(() => {
        console.log('todo title: ', todoTitle);
    }, [todoTitle]);

    return <div className="addToDoContainer">
        <input onChange={onTodoTitleChange} value={todoTitle} />
        {/*add checkbox to check if todo we are creating is already done */}
        <Button title='Add' onClick={onAdd} />
    </div>
}
