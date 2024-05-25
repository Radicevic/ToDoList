import TodoList from './ToDoList.jsx';
import {todos} from "./todos.js"
import Header from './Header.jsx';
import {useState, useEffect } from "react";



function App() {

  fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(console.log);


  const url = "https://jsonplaceholder.typicode.com/users";
const [data, setData] = useState([]);

const fetchInfo = () => {
  return fetch(url)
    .then((res) => res.json())
    .then((d) => setData(d))
}


useEffect(() => {
  fetchInfo();
}, []);


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



  return (
   <>
   <Header />
    {/*todos.map((item) => <TodoList className={} id={item.id} label={item.label} createdAt={item.createdAt} onClick={() => onTodoItemClick(item.id)} />)*/}
    {todos.map((item) => <TodoList isIncludes={doneTasks.includes(item.id)}  key={item.id} id={item.id} label={item.label} createdAt={item.createdAt} onSelect={() => onTodoItemClick(item.id)} />)}      
    <Header />
    {data.map((item) => <TodoList isIncludes={doneTasks.includes(item.id)}  key={item.id} id={item.id} label={item.name} createdAt={item.address.city} onSelect={() => onTodoItemClick(item.id)} />)}      

   </>
  );
}

export default App;
