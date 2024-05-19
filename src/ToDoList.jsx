import { useState } from 'react';
import './App.css';


export default function TodoList ({ listItem, id, label, createdAt}) {

    const [clickState, setClickState] = useState();

    function onTodoItemClick (event) {
        event.currentTarget.classList.toggle('done');
        setClickState(event.target)
        console.log(clickState)
   }
    
   
    
    return (
    
    <div className='todoListContainer'>
       <ul className='list'>
        <li className={listItem =  "listItem"} onClick={onTodoItemClick}>
            <p>{id}</p>
            <p>{label}</p>
            <p>{createdAt}</p>
        </li>
       </ul>
       {/*<TodoList  todos={todos}/>*/}
   </div>
   )
   }