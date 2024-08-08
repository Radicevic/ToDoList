import { Task } from "../Task/Task";

import {useEffect, useState} from "react";
import { AddTodo } from "../AddTodo/AddTodo";
import { ToDos } from "../../services/TodoService";

import './TaskList.css';

export function TaskList() {

    const [todoList, setTodoList] = useState([]);
    const [ error, setError] = useState("");

    function updateTask (updatedTask){

        const clickedTodoIndex = todoList.findIndex((todo) => todo.id === updatedTask.id);

        const newState = [...todoList]; //shallow copy

        //newState[clickedTodoIndex] = updatedTask;

        newState.splice(clickedTodoIndex, 1, updatedTask);


        setTodoList(newState);
    }

    function deleteTask (id){

        const newTaskState = todoList.filter((task) => task.id !== id);

        setTodoList(newTaskState);
    }

    function createTask(createdTask) {
        const newState = [...todoList];

        newState.push(createdTask);

        setTodoList(newState);
        console.log("CREATE ", createdTask)
    }

    function clearAllTask (){
        // const deleteTodo = async (todo) => await ToDos.delete(todo.id);
        // todoList.forEach(deleteTodo);
        const promises = [];
        let newState = [...todoList];
        todoList.forEach((todo) => {
            promises.push(ToDos.delete(todo.id)
            .then(() => {
            const indexToDelete = newState.findIndex((item) => item.id === todo.id)
            newState.splice(indexToDelete, 1);
            }));
        }); 
        Promise.all(promises)
        .then(() => setTodoList(newState))
        .catch((error)=>{
            setError(error.response.data.message);
            setTodoList(newState)
        });
    }


    useEffect( () => {
        async function getTodos() {
            //const response = await ToDos.getAll();
            const response = await ToDos.getSingleUser(13);
            console.log("Response.todos ", response);
            setTodoList(response.todos);
        }

        getTodos();
    }, []);


    return (
        <div className="task-list">
             <AddTodo onCreated={createTask} onClearAll={clearAllTask} />
              {todoList.map((item) =>
              <Task
              todo={item}
              key={item.id}
              onDelete={deleteTask}
              onEdit={updateTask}
              />)}
              <p>{error}</p>
        </div>
    );
}
