import { Button } from '../Button/Button'

import './Task.css'
import {useState} from "react";

export function Task ({ onDelete, todo, onToggle }) {
    const { completed, id, todo: label } = todo;

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handleDelete(){
        // Promise syntax
        // onDelete(id)
        //     .catch((e) => setError(e.message))
        //     .finally(() => setIsLoading(false));

        //Async/await syntax

        try {
            setIsLoading(true);

            const response = await fetch('https://dummyjson.com/todos/'  + id, { method: 'DELETE' });

            const data = await response.json();

            onDelete(data.id); // this has to be promise
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleUpdate(){
        try {
            setIsLoading(true);

            const payload = {
                completed: !completed
            }

            const response = await fetch('https://dummyjson.com/todos/' + id, {
                method: 'PUT', /* or PATCH */
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            console.log(data)

            onToggle(data); // this has to be promise
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={`list-item ${completed ? "done" : ''}`}>
            <div onClick={handleUpdate} className='todo-text'>
                <span>{id}</span>
                <span>{label}</span>
            </div>
            <p>{isLoading ? "Loading..." : ""}</p>

            {!isLoading && error ? <p>{error}</p> : <></>}

            <div className='todo-actions'><Button onClick={handleDelete} title={"Delete"}/></div>
        </div>
    )
}
