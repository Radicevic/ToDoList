# Class 2

## Key points
- deep dive to map function
- revisit Event object
- explain props naming and props propagation

### Deep dive to map function
    const letters = ['a', 'b', 'c'];
    const numbers = [1, 2, 3, 4, 5];
    const users = [{ id: 1, name: 'Ivan'}, { id: 2, name: 'Dragan'}];

    function myMap (data, mapper) {
        const mapped = [];
        
        for(let i = 0; i < data.length; i++) {
            mapped[mapped.length] = mapper(data[i]);
        }
        
        return mapped;
    }

    const upperCasedData = myMap(letters, function (item){
        return item.toUpperCase();
    });

    const addNumber = myMap(letters,function (item){
        return item + '1';
    });

    const incremented = myMap(numbers, function (item){
        return item + 1;
    });

    const newUsers = myMap(users, function (item){
        item.name = item.name.toUpperCase();
        return item;
    });

    const mappedUssers = users.map((user) => {
        const uppercasedName = user.name.toUpperCase();
        user.name = uppercasedName;

        return user;
    });
    
    console.log('mapped: ',upperCasedData, addNumber, incremented, newUsers, mappedUsers);

### Explain props naming and props propagation
    
    {todos.map((item) => <TodoList key={item.id} {...item} />)}

    // alternative way of key props
    {todos.map((item, index) => <TodoList key={index} {...item} />)}
    
    # Spreading object's keys as props
    {todos.map((item, index) => <TodoList key={index} {...item} />)}
    # Manulally seting props
    {todos.map((item) => <TodoList  key={item.id} id={item.id} label={item.label} createdAt={item.createdAt} onSelect={() => onTodoItemClick(item.id)} />)}
    
    

### HOMEWORK
- add id of the clicked todo item in the clickState
- add done class to listItem if id of todo matches any id in clickState
