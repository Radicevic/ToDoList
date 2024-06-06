import {useEffect, useState} from "react";

import { Task } from "../Task/Task";
import { fetchTodoList } from "../../services/TodoService";

import './TaskList.css';

export function TaskList() {
    const [todoList, setTodoList] = useState([]);


    function onTodoItemClick (id) {
        let newDoneState = [...todoList];

        const clickedTodoIndex = newDoneState.findIndex((todo) => todo.id === id);

        const changedTodo = {...newDoneState[clickedTodoIndex]};

        changedTodo.completed = !changedTodo.completed;

        newDoneState[clickedTodoIndex] = changedTodo;

        setTodoList(newDoneState);

        const payload = {
            completed: changedTodo.completed,
            todo: changedTodo.todo + " completed"
          };

         /* updating completed status of todo with id 1 */
    fetch('https://dummyjson.com/todos/' + id, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( payload )
        })
       .then(res => res.json())
       .then((res) => console.log("Updated: ", res));




    }

    function deleteTask (id){
        const newTaskState = todoList.filter((task) => task.id !== id);

        console.log(id)

        fetch('https://dummyjson.com/todos/'  + id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(() => setTodoList(newTaskState)).catch((err) => console.log(err.message));
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
          {todoList.map((item) => <Task done={item.completed} key={item.id} id={item.id} label={item.todo} onToggle={() => onTodoItemClick(item.id)} onDelete={() => deleteTask(item.id)}/>)}
        </div>
    );
}
