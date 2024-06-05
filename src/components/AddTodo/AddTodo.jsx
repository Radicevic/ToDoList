import { useEffect, useState } from "react";

import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox/CheckBox";

import './AddTodo.css';

const loggedUserId = 3;
const status = "Task status";

export function AddTodo(props) {
    const [todoTitle, setTodoTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    function onAdd () {
        // read title from state
        const title = todoTitle;
        // prepare request payload
        const newTodo = { todo: title, completed: completed, userId: loggedUserId };
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

    function completedChange (e){
        console.log(e.currentTarget.checked)
        setCompleted(e.currentTarget.checked);
    }

    useEffect(() => {
        console.log('todo title: ', todoTitle);
        console.log(completed)
    }, [todoTitle, completed]);

    return <div className="addToDoContainer">
        <input onChange={onTodoTitleChange} value={todoTitle} />
        <CheckBox change={completedChange} value={completed} title={status}/>
        <Button title='Add' onClick={onAdd} />
    </div>
}
