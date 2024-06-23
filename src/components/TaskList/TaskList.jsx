import {useEffect, useState} from "react";

import { Task } from "../Task/Task";
import { fetchTodoList } from "../../services/TodoService";

import './TaskList.css';

export function TaskList() {
    const [todoList, setTodoList] = useState([]);

    
    async function updateTask (updatedTask){
       
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


    useEffect( () => {
        async function getTodos() {
            const response = await fetchTodoList();

            setTodoList(response.todos);
        }

        getTodos();
    }, []);
console.log(todoList)

    return (
        <div className="task-list">
          {
              todoList.map((item) =>
              <Task
                  todo={item}
                  key={item.id}
                  onDelete={deleteTask}
                  onToggle={updateTask}
              />)
          }
        </div>
    );
}
