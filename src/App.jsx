import TodoList from './ToDoList.jsx';
import {todos} from "./todos.js"
import Header from './Header.jsx';
import {useState} from "react";



function App() {
    const [doneTasks, setDoneTasks] = useState([]);

    function onTodoItemClick (id) {
        let newDoneState = [...doneTasks];

        const isDone = newDoneState.includes(id);

        if(!isDone) {
            newDoneState.push(id);
            setDoneTasks(newDoneState);
            return;
        }

        newDoneState = newDoneState.filter((doneId) => doneId !== id);

        setDoneTasks(newDoneState);
    }

  return (
      <>
       <Header />
       {todos.map((item) => <TodoList  key={item.id} id={item.id} label={item.label} createdAt={item.createdAt} onSelect={() => onTodoItemClick(item.id)} />)}
      </>
  );
}

export default App;
