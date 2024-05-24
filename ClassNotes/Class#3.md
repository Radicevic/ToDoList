#Class 3

## Key Points
- Destructuring
- Refactor state handling

### Destructuring
    const users = ['ivan', 'dragan'];
    const todo = { id: 1, name: 'Milan', label: 'Clean room'};
    
    const todoId = todo.id;
    console.log('id:', todoId);
    
    const { id: destructedId , name: destructuredName, label: destructuredLabel} = todo
    
    console.log(destructedId, destructuredName, destructuredLabel);
    
    const user1 = users[0];
    const user2 = users[1];
    const user3 = users[2];
    
    console.log('users: ',user1, user2, user3);
    
    const [destructuredUser1, destructuredUser2, destructuredUser3   ] = users;
    
    console.log('destructured: ', destructuredUser1, destructuredUser2, destructuredUser3);

### Refactor state handling

    function onTodoItemClick (id) { 
        let newDoneState = [...doneTasks];
    
        // Scenario #1 - do not duplicate done task ids
        // Steps:
        // - check if the id already exists in the done task
    
        // let isDone = false;
        // for(let i = 0; i < newDoneState.length; i++) {
        //     if(newDoneState[i] === id) {
        //         isDone = true;
        //     }
        // }
        // const isDone = newDoneState.includes(id);
    
        // - if included skip adding the current task id
        // if(isDone) {
        //     console.log('Already done - ', id);
        //     return;
        // }
    
        // - if not add the current task id
        // console.log('Not done - ', id);
        //
        // newDoneState.push(id);
        //
        // setDoneTasks(newDoneState);
    
        // Scenario #2 - toggle done task on click
        // check if a task is done
        const isDone = newDoneState.includes(id);
    
        // if not add it to the list
        if(!isDone) {
            newDoneState.push(id);
            setDoneTasks(newDoneState);
            return;
        }
        // if done remove it from the list
        newDoneState = newDoneState.filter((doneId) => doneId !== id);
    
        setDoneTasks(newDoneState);
    }

### Homework
- add 'done' class to done todos
  - check if the id is in the doneTask
  - if yes apply done class
  - if not do not apply anything
- refactor Header component 
  - to receive the title as a 'title' props
  - use title props to display title text received from props
  - if there are no props propagated use 'MY TO DO LIST' as the default title
- fetch() method
  - investigate JS fetch method
  - use dummy json api to fetch todos using fetch method - https://dummyjson.com/docs
  - console.log fetch todos data
- invetigate useEffect
  - readr offical react docs on component lifecycle
  - read official react docs on useFffect topic
  - console.log welcome message when todo list app is mounted
