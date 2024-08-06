import { useEffect, useState } from "react";

import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox/CheckBox";
// import { axiosInstance } from "../../services/axiosIstance";

import './AddTodo.css';
import { ToDos } from "../../services/TodoService"; 

const loggedUserId = 3;
const status = "Task status";

export function AddTodo({ onCreated, onClearAll}) {
    const [error, setError] = useState('');
    const [todoTitle, setTodoTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [completed, setCompleted] = useState(false);

    async function onAdd () {
        const newTodo = { todo: todoTitle, completed: completed, userId: loggedUserId };

        try {
            setIsLoading(true);
            setError('');
            const response = await ToDos.create(newTodo);
            // const response = await axiosInstance.post('/todos/add', newTodo)

            // throw new Error ("Something went wrong!")

            setTodoTitle(" ")
            onCreated(response);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    /*function onAdd () {
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
                console.log("Crated: ", created);
                setTodoTitle('');
            }).catch((err) => {
                console.log("ERR: ", err);
                setError(err.message);
        }).finally(() => {
            setIsLoading(false);
        });

    }
        */


    useEffect (() => {

    }, [todoTitle])

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
            <Button title='ClearAll' onClick={onClearAll}/>
        </div>
        {isLoading ? <p>Loading...</p> : <></>}
        {!isLoading && error ? <p>{error}</p> : <></>}
    </div>
}
