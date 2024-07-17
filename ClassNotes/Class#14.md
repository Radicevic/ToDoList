# Class 14

## Key Points
- deep dive into constructors on JS
```js
const user = {}; // object literal

const user1 = {
    name: 'Dragan',
    lastName: 'Radičević',
    birthYear: 1986,
    getYearsOld: function () {
        return 2024 - user1.birthYear;
    },
    getFullName: function () {
        return `${user.name} ${user.lastName}`;
    }
};

user.name = 'Ivan';
user.lastName = 'Balić';

function createUser(first, last, yearOfBirth) {
    const user = {
        name: first,
        lastName: last,
        birthYear: yearOfBirth,
        getYearsOld: function () {
            return 2024 - user.birthYear;
        },
        getFullName: function () {
            return `${user.name} ${user.lastName}`;
        }
    }

    return user;
}

const user2 = createUser('Mika', 'Mikic', 1975);
const user3 = createUser('Pera', 'Peric', 1991);

console.log('user: ', user, 'user1: ', user1, 'user2: ', user2);
console.log(user1.getFullName() ,' is ', user1.getYearsOld(),' years old');
console.log(user2.getFullName() ,' is ', user2.getYearsOld(),' years old');
console.log(user3.getFullName() ,' is ', user3.getYearsOld(),' years old');
```
- use axios instead of fetch method
- refactor EditTodo component

## Homework
