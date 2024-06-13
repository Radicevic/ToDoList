import { Button } from '../Button/Button'

import './Task.css'
import {useState} from "react";

export function Task ({ onDelete, todo, onToggle }) {
    const { done, id, todo: label } = todo;

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

            await onDelete(id); // this has to be promise
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={`list-item ${done ? "done" : ''}`}>
            <div onClick={() => onToggle(id)} className='todo-text'>
                <span>{id}</span>
                <span>{label}</span>
            </div>
            <p>{isLoading ? "Loading..." : ""}</p>

            {!isLoading && error ? <p>{error}</p> : <></>}

            <div className='todo-actions'><Button onClick={handleDelete} title={"Delete"}/></div>
        </div>
    )
}
