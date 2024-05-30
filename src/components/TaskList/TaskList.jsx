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
          {todoList.map((item) => <Task done={item.completed} key={item.id} id={item.id} label={item.todo} onSelect={() => onTodoItemClick(item.id)} />)}
        </div>
    );
}
