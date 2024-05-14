import './App.css';

import { todos } from './todos.js';

//  TODO-DEMO
//     Create todo list with title and couple of todo items
//     Add some style
//     Strikethrough done items item is done when clicked
//     Create file to store todo items and render items dynamicly

//HOMEWORK
// Adapt code to work with new data structure
// state:
//     add component state with list of completed tasks
//     completed task list should initially be empty
//     store todoItem id in state onClick
//     all items listed as completed task list should have className='done'
//EXTRA:
//     create separate TodoList component
//     adapt TodoList component to receive todos as props
// Recourses
//React docs -> official react doc
//Stackoverflow -> community
//MDN->JS

function App() {
    function onTodoItemClick (event) {
        event.currentTarget.classList.toggle('done');
    }

  return (
    <div className='todoListContainer'>
     <h1 className='title'>MY TODO LIST</h1>
        <ul className='list'>
            {todos.map((todoItem) => <li key={todoItem} className="listItem" onClick={onTodoItemClick}>test</li>)}
        </ul>
        {/*<TodoList  todos={todos}/>*/}
    </div>
  );
}

export default App;
