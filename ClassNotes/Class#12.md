# Class 12

## Key Points
- walk through homework
  - basic axios usage
  - controlled component
  - explain UI fix for dummy API
  ```
    const DATA_BASE = [
      { id: 1, todo: 'Test1', completed: false },
      { id: 2, todo: 'Test2', completed: true }
    ]; 
  
    // GET => /todos/
    // => DATA_BASE
    // Update #1
    //PUT => /todos/<1> => payload: { completed: true }
  
    const payload = {completed: true};
    const toUpdate = DATA_BASE.find((todo) => todo.id === 1);
    
    const toUpdateCopy = {
    id: toUpdate.id,
    todo: toUpdate.todo,
    completed: toUpdate.completed,
    };
  
    // payload => id X
    //payload => todo X
    //payload => completed W
    toUpdateCopy.completed = payload.completed; // => true
    // {
    // id: 1,
    // todo: 'Test1',
    // completed: true,
    // }
    
    // send back response
    return toUpdateCopy;
    
    // Update#2
    //PUT => /todos/<1> => payload: { todo: 'Nova vrednost' }
    const payload = {todo: 'Nova vrednost'};
    const toUpdate = DATA_BASE.find((todo) => todo.id === 1);
    
    const toUpdateCopy = {
    id: toUpdate.id,
    todo: toUpdate.todo,
    completed: toUpdate.completed,
    };
    // payload => id X
    //payload => todo W
    toUpdateCopy.todo = payload.todo; // => 'Nova vrednost'
    //payload => completed X
    // {
    // id: 1,
    // todo: 'Nova vrednost',
    // completed: false,
    // }
    
    // send back response
    return toUpdateCopy;
    
    // RESENJE
    // GET => /todos/
    // => DATA_BASE
    // Update #1
    //PUT => /todos/<1> => payload: { todo: 'Test1', completed: true };
    const payload = { todo: 'Test1', completed: true};
    const toUpdate = DATA_BASE.find((todo) => todo.id === 1);
    
    const toUpdateCopy = {
    id: toUpdate.id,
    todo: toUpdate.todo,
    completed: toUpdate.completed,
    };
    // payload => id X
    //payload => todo W
    toUpdateCopy.todo = payload.todo; // => 'Test1'
    //payload => completed W
    toUpdateCopy.completed = payload.completed; // => true
    // {
    // id: 1,
    // todo: 'Test1',
    // completed: true,
    // }
    
    // send back response
    return toUpdateCopy;
    
    // Update#2
    //PUT => /todos/<1> => payload: { completed: true, todo: 'Nova vrednost' }
    const payload = { completed: true, todo: 'Nova vrednost'};
    const toUpdate = DATA_BASE.find((todo) => todo.id === 1);
    
    const toUpdateCopy = {
    id: toUpdate.id,
    todo: toUpdate.todo,
    completed: toUpdate.completed,
    };
    // payload => id X
    //payload => todo W
    toUpdateCopy.todo = payload.todo; // => 'Nova vrednost'
    //payload => completed W 
    toUpdateCopy.completed = payload.completed; // => true
    // {
    // id: 1,
    // todo: 'Nova vrednost',
    // completed: true,
    // }
    
    // send back response
    return toUpdateCopy;
  ```

## Homework
- create uncontrolled EditTodo
  - component should handle input state => stare value and setState function
  - component should send update request to the API
  - props: 
    - onEdit => this function should only update taskList with the API response
    - value => this is initial input state value
