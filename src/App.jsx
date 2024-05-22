import TodoList from './ToDoList.jsx';
import {todos} from "./todos.js"
import Header from './Header.jsx';
import {useState} from "react";



function App() {
    /*<TodoList {...todos[0]}/> */
    /*<TodoList
   id = {todos[0].id}
   label={todos[0].label}
   createdAt={todos[0].createdAt}/> */

    const [clickState, setClickState] = useState("Dragan");

    function onTodoItemClick (id) {
      setClickState(id);
          // add id of clicked todo to the state
          console.log("setClickState: " + setClickState )
          console.log("clickState: " + clickState)

    }


  return (
   <>
   <Header />
    {/*{todos.map((item) => <TodoList key={item.id} {...item} />)}*/}
    {/*add done class to listItem if id of todo matches any id in clickState*/}
    {/*todos.map((item) => <TodoList className={} id={item.id} label={item.label} createdAt={item.createdAt} onClick={() => onTodoItemClick(item.id)} />)*/}

    {todos.map((item) => <TodoList  key={item.id} id={item.id} label={item.label} createdAt={item.createdAt} onSelect={() => onTodoItemClick("Ivan")} />)}
       {/*alternative way of key setting */}
       {/*{todos.map((item, index) => <TodoList key={index} {...item} />)}*/}
       

   </>
  );
}

export default App;
