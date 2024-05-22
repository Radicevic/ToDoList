/* Recourses
     React docs -> official react doc
     Stackoverflow -> community
     MDN->JS

 ### Class 1
  TODO-DEMO
  Create todo list with title and couple of todo items
  Add some style
  Strikethrough done items item is done when clicked
  Create file to store todo items and render items dynamicly

    HOMEWORK
     Adapt code to work with new data structure
     state:
         add component state with list of completed tasks
         completed task list should initially be empty
         store todoItem id in state onClick
         all items listed as completed task list should have className='done'

    EXTRA:
         create separate TodoList component
         adapt TodoList component to receive todos as props

### Class 2
    - deep dive to map function
    - revisit Event object
    - explain props naming and props propagation

    deep dive to map function
          const letters = ['a', 'b', 'c'];
            const numbers = [1, 2, 3, 4, 5];
            const users = [{ id: 1, name: 'Ivan'}, { id: 2, name: 'Dragan'}];

            function myMap (data, mapper) {
                const mapped = [];
                for(let i = 0; i < data.length; i++){
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

            // const newUsers = users.map((user) => {
            //     const uppercasedName = user.name.toUpperCase();
            //
            //     user.name = uppercasedName;
            //     return user;
            // });

            console.log('mapped: ',upperCasedData, addNumber, incremented, newUsers);

       HOMEWORK
       -

       ### Class 3
       - explain children props
           - refactor useState
           - reusable components - Header */

