# Class 11

## Key Points
- move update task API call to the TaskList component
- explain props drilling
  
  ![ Task List State ](/ClassNotes/schemas/TaskListState.png)
- relocate the state to App component to provide AddTodo component access to todoList state

  ![ App State ](/ClassNotes/schemas/AppState.png)
- introduce the idea of global state management

  ![ Global State ](/ClassNotes/schemas/GlobalState.png)
- context provider

  ![ Context Provider ](/ClassNotes/schemas/ContextProvider.png)

## Homework
- try to use axios instance
- relocate todoList state to TaskList component
- relocate AddToDo component to TaskList component
- implement todo label update UI
  - add edit button
  - click on edit button opens prepopulated input field
  - after editing the input second click on the edit button submits the update request on the API
  - after request is resolved act accordingly
