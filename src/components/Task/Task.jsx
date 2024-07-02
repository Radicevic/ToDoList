import { axiosInstance } from '../../services/axiosIstance';
import { Button } from '../Button/Button'
import { EditTodo } from '../EditTodo/EditTodo';

import './Task.css'
import { useState } from "react";

export function Task ({ onDelete, todo, onEdit }) {
    const { completed, id, todo: label } = todo;
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handleDelete() {
        try {
            setIsLoading(true);
            const response = await axiosInstance.delete('/todos/' + id);
            onDelete(response.data.id);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleUpdate() {
        try {
            setIsLoading(true);
            const payload = {
                ...todo,
                completed: !completed
            };

            delete payload.id;

            const response = await fetch('https://dummyjson.com/todos/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            onEdit(data);           
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleEdit(editedValue) {
        
        const editedTodoTask = { 
            ...todo,
            todo: editedValue 
        }
            
            delete editedTodoTask.id;

        try {
            setIsLoading(true);
            const response = await axiosInstance.put("/todos/" + id, editedTodoTask);
            onEdit(response.data);
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
            <div className='todo-actions'>
                <EditTodo
                    label={label}
                    onEdit={handleEdit}
                    titleBefore={"Edit"}
                    titleAfter={"Ok"}
                />
                <div>
                    <Button onClick={handleDelete} title={"Delete"} />
                </div>
            </div>
        </div>
    )
}
