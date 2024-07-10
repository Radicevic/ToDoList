import { useState } from "react";

import { Button } from '../Button/Button'
import { EditTodo } from '../EditTodo/EditTodo';
import { ToDos } from "../../services/TodoService";
// import {deleteTodo, updateTodo} from "../../services/TodoService";
// import { axiosInstance } from '../../services/axiosIstance';

import './Task.css'

export function Task ({ onDelete, todo, onEdit }) {
    const { completed, id, todo: label } = todo;
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handleDelete() {
        try {
            setIsLoading(true);
          //  const response = await deleteTodo(id);
            const response = await ToDos.delete(id);

            console.log('DELTE RESPONSE: ', response)
            onDelete(response.id);
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

          //  const response = await updateTodo(id, payload);

            const response = await ToDos.update(id, payload);

            onEdit(response);
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
            const response = await ToDos.update(id, editedTodoTask);
            onEdit(response);
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
