import axiosInstance from '../../services/axiosIstance';
import { Button } from '../Button/Button'
import { EditTodo } from '../EditTodo/EditTodo';

import './Task.css'
import {useState} from "react";

export function Task ({ onDelete, todo, onEdit }) {
    const { completed, id, todo: label } = todo;
    const [ todoEdit, setTodoEdit ] = useState (label);


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

            //const response = await fetch('https://dummyjson.com/todos/'  + id, { method: 'DELETE' });
            //const data = await response.json();
            //onDelete(data.id); // this has to be promise

            const response = await axiosInstance.delete('/todos/' + id);

            onDelete(response.data.id); 

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

            onEdit(data); // this has to be promise
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleEdit(){

        const editedTodoTask = { todo: todoEdit}

        try {
            //setIsLoading(true);
            //const response = await fetch('https://dummyjson.com/todos/' + id, {
            //    method: 'PUT', /* or PATCH */
            //    headers: {'Content-Type': 'application/json'},
            //   body: JSON.stringify(editedTodoTask)
            //});
            //setTodoEdit("")
            //const data = await response.json();
            //console.log("Updated data ", data)
            //onEdit(data);  // this has to be promise

            setIsLoading (true);

            const response = await axiosInstance.put("/todos/" + id, editedTodoTask);

            //setTodoEdit("");

            console.log("Updated data ", response.data);

            onEdit(response.data);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    function onTodoTaskEdit (e){
       setTodoEdit(e.target.value)
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
                  <EditTodo onChange={onTodoTaskEdit} onEdit={handleEdit} value={todoEdit} titleBefore={"Edit"} titleAfter={"Ok"} />    
               <div>
                  <Button onClick={handleDelete} title={"Delete"}/>
               </div>
            </div>
            
        </div>
    )
}
