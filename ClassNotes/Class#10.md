# Class 10

## Key Points
- real project
    - revisiting request sending
    - locate dedicated service
    - found that there is request config that every request has to have
- learning project
    - deep dive to object destructuring
  ``` 
  // ARRAY DESTRUCTURING
  const names = ['ivan', 'dragan', 'marko'];
  const [ivan] = names; => creates constant named 'ivan' and assignes it the value of element on index 0 from `names` array

  const [ivan, dragana, marko] = names; => ivan = 'ivan'; dragana = 'dragan'; marko = 'marko';
  const [pera, zika, mika] = names; => pera = 'ivan'; zika = 'dragan'; mika = 'marko';
  //same as
  const ivan = names[0];
  const dragan = names[1];
  const marko = names[2];
  
  // OBJECT DESTRUCTURING
  const todo = {
    id: 1,
    completed: ture,
    todo: 'Walk the dog',
  };
  const { id } = todo; => creates a constant named 'id' and assignes it a value of a `id` key from 'todo' object
  // same as
  const id = todo.id;
  
  const { id, todo<key to read from>: label<constant name to assigne the value to>, completed } = todo;
  //same as
  const id = todo.id;
  const label = todo.todo;
  const completed = todo.completed;
  ```
    - refactor API calls to async await and move DELETE and UPDATE fetch method calls to Task component

## Homework
- try to use axios to send API requests - real project
- ... - learning project
