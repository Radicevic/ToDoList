import {useEffect, useState} from "react";

import { Task } from "../Task/Task";
import { fetchTodoList } from "../../services/TodoService";

import './TaskList.css';

export function TaskList() {
    const [todoList, setTodoList] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState ('');


    function onTodoItemClick (id) {
        setIsLoading(true)
        let newDoneState = [...todoList];

        const clickedTodoIndex = newDoneState.findIndex((todo) => todo.id === id);

        const changedTodo = {...newDoneState[clickedTodoIndex]};

        changedTodo.completed = !changedTodo.completed;

        newDoneState[clickedTodoIndex] = changedTodo;
        
     const payload = {
            completed: changedTodo.completed,
          };

         /* updating completed status of todo with id 1 */
        fetch('https://dummyjson.com/todos/' + id, {
            method: 'PUT', /* or PATCH */
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
            .then(res => {
                //throw new Error('Something went wrong!');
                return res.json();
            })
            .then ((response) => {
                newDoneState[clickedTodoIndex] = response.completed;
                setTodoList(newDoneState); //Domaci
                console.log("Update ", response.completed)

            })
            .catch((err) => {
                setError(err.message)
            })
            .finally (() => {
                setIsLoading(false)
            })
    }

    function deleteTask (id){
        setIsLoading(true)
        console.log("DELETE LOADING", isLoading)


        fetch('https://dummyjson.com/todos/'  + id, {
            method: 'DELETE',
        })
        .then(res => {
            throw new Error ("Something went wrong!")
           // return res.json();

        })
        .then((response) => {
            const newTaskState = todoList.filter((task) => task.id !== response.id);
            setTodoList(newTaskState);
            
        console.log("Response from delete: ", response)
    
    })
        // Izvuci iz Responsa id i setovati state filtriranjem 
       // .catch((err) => console.log(err.message))
        .catch((err) => setError(err.message))
        .finally(()=>setIsLoading(false))
        }

    useEffect( () => {
        async function getTodos() {
            const response = await fetchTodoList();

            setTodoList(response.todos);
        }

        getTodos();
    }, []);


    return (
        <div className="task-list">
          {todoList.map((item) => <Task error={error} isLoading={isLoading} done={item.completed} key={item.id} id={item.id} label={item.todo} onToggle={() => onTodoItemClick(item.id)} onDelete={() => deleteTask(item.id)}/>)}
          
        </div>
    );
}
