import { Task } from "../Task/Task";

import {useEffect, useState} from "react";
import { AddTodo } from "../AddTodo/AddTodo";
import { ToDos } from "../../services/TodoService";

import './TaskList.css';

export function TaskList() {

    const [todoList, setTodoList] = useState([]);


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


    useEffect( () => {
        async function getTodos() {
            //const response = await ToDos.getAll();
            const response = await ToDos.getSingleUser();
            console.log("Response.todos ", response)
            setTodoList(response.todos);
        }

        getTodos();
    }, []);


    return (
        <div className="task-list">
             <AddTodo onCreated={createTask} />
          {
              todoList.map((item) =>
              <Task
                  todo={item}
                  key={item.id}
                  onDelete={deleteTask}
                  onEdit={updateTask}
              />)
          }
        </div>
    );
}
