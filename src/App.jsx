import {useState, useEffect } from "react";

import Header from './Header.jsx';
import TodoItem from './TodoItem.jsx';

const url = 'https://dummyjson.com/todos';

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve('resolved'), 3000);
// });

async function fetchTodoList () {
    const res = await fetch(url);

    return await res.json();
}

function App() {
    const [todoList, setTodoList] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    function onTodoItemClick (id) {
        let newDoneState = [...doneTasks];

        const isDone = newDoneState.includes(id);

        if(!isDone){
            newDoneState.push(id);
            setDoneTasks(newDoneState);
            return;
        }

        newDoneState = newDoneState.filter((doneId) => doneId !== id);

        setDoneTasks(newDoneState)
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
       <Header />
      <div className='todoListContainer'>
           <ul className='list'>
            {todoList.map((item) => <TodoItem done={doneTasks.includes(item.id)} key={item.id} id={item.id} label={item.todo} onSelect={() => onTodoItemClick(item.id)} />)}
           </ul>
       </div>
   </>
  );
}

export default App;
