import TodoList from './ToDoList.jsx';
import {todos} from "./todos.js"
import Header from './Header.jsx';
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
    /*<TodoList {...todos[0]}/> */
    /*<TodoList
   id = {todos[0].id}
   label={todos[0].label}
   createdAt={todos[0].createdAt}/> */

  return (
   <>
   
   <Header /> 
   
   {todos.map((item) => <TodoList key={item.id} {...item}/>)}
   
   </>
  
  );
}

export default App;
