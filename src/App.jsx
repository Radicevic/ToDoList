import {Page} from "./components/Page/Page";
import { TaskList } from './components/TaskList/TaskList.jsx';
import {useEffect, useState} from "react";
import {fetchTodoList} from "./services/TodoService";
import {AddTodo} from "./components/AddTodo/AddTodo";

const todoTitle = 'MY TODO LIST';

function App() {
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

    function createTask(createdTask) {
        const newState = [...todoList];

        newState.push(createdTask);

        setTodoList(newState);
    }


    useEffect( () => {
        async function getTodos() {
            const response = await fetchTodoList();

            setTodoList(response.todos);
        }

        getTodos();
    }, []);

  return (
   <>
       <Page pageTitle={todoTitle} pageNumber={1} onCreated={createTask}>
           <AddTodo onCreated={createTask} />
           <TaskList updateTask={updateTask} deleteTask={deleteTask} todoList={todoList} />
       </Page>
   </>
  );
}

export default App;
