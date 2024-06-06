import { useEffect, useState } from "react";

import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox/CheckBox";

import './AddTodo.css';

const loggedUserId = 3;
const status = "Task status";

export function AddTodo(props) {
    const [error, setError] = useState('');
    const [todoTitle, setTodoTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [completed, setCompleted] = useState(false);

    function onAdd () {
        setIsLoading(true);
        setError('');

        const newTodo = { todo: todoTitle, completed: completed, userId: loggedUserId };

        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        })
            .then(res => {
                return res.json();
            })
            .then((created) => {
                setTodoTitle('');
            }).catch((err) => {
                setError(err.message);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    function onTodoTitleChange (e) {
        setError('');
        setTodoTitle(e.target.value);
    }

    function completedChange (e){
        console.log(e.currentTarget.checked)
        setCompleted(e.currentTarget.checked);
    }

    return <div>
        <div className="addToDoContainer">
            <input onChange={onTodoTitleChange} value={todoTitle}/>
            <CheckBox change={completedChange} value={completed} title={status}/>
            <Button title='Add' onClick={onAdd}/>
        </div>
        {isLoading ? <p>Loading...</p> : <></>}
        {!isLoading && error? <p>{error}</p> : <></>}
    </div>
}
