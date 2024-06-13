import {useEffect, useState} from "react";

import { Task } from "../Task/Task";
import { fetchTodoList } from "../../services/TodoService";

import './TaskList.css';

export function TaskList() {
    const [ error, setError ] = useState ('');
    const [todoList, setTodoList] = useState([]);

    function onTodoItemClick (id) {
        let newDoneState = [...todoList];

        const clickedTodoIndex = newDoneState.findIndex((todo) => todo.id === id);

        const changedTodo = {...newDoneState[clickedTodoIndex]};

        changedTodo.completed = !changedTodo.completed;

        newDoneState[clickedTodoIndex] = changedTodo;

     const payload = {
            completed: changedTodo.completed,
          };

        // rewrite this to async/await
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
    }

    async function deleteTask (id){
        // Promise syntax
        // return fetch('https://dummyjson.com/todos/'  + id, {
        //     method: 'DELETE',
        // })
        // .then(res => {
        //    return res.json();
        // })
        // .then((response) => {
        //     const newTaskState = todoList.filter((task) => task.id !== response.id);
        //     setTodoList(newTaskState);
        // });

        // Async/await syntax
        const response = await fetch('https://dummyjson.com/todos/'  + id, { method: 'DELETE' });

        const data = await response.json();

        const newTaskState = todoList.filter((task) => task.id !== data.id);

        setTodoList(newTaskState);
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
          {
              todoList.map((item) =>
              <Task
                  todo={item}
                  key={item.id}
                  onDelete={deleteTask}
                  onToggle={onTodoItemClick}
              />)
          }
        </div>
    );
}
