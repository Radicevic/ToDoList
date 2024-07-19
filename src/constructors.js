// const name = 'Slavisa';
//
// function printName() {
//     const name = 'Ivan';
//     console.log('My nam is', name);
//
//     function printNameInside() {
//         const name = 'Dragan';
//         console.log('My inside name is', name);
//     }
//
//     return printNameInside;
// }
//
//
// const insideName = printName();
//
// insideName();
//
// console.log('My outside name: ', name);



const user = {}; // object literal

user.name = 'Ivan';
user.lastName = 'Balić';

function createUser(first, last, yearOfBirth) {
    return {
        name: first,
        lastName: last,
        birthYear: yearOfBirth,
        getYearsOld: function () {
            return 2024 - this.birthYear;
        },
        getFullName: function () {
            return `${this.name} ${this.lastName}`;
        }
    }
}

console.log('GLOBAL THIS: ', this);

const user1 = {
    name: 'Dragan',
    lastName: 'Radičević',
    birthYear: 1986,
    getYearsOld: function () {
        return 2024 - user1.birthYear;
    },
    getFullName: function () {
        console.log('THIS:', this);
        return `${user1.name} ${user1.lastName}`;
    }
};
user1.getFullName();
const user2 = createUser('Mika', 'Mikic', 1975);
const user3 = createUser('Pera', 'Peric', 1991);

// console.log('user: ', user, 'user1: ', user1, 'user2: ', user2);
// console.log(user1.getFullName() ,' is ', user1.getYearsOld(),' years old');
// console.log(user2.getFullName() ,' is ', user2.getYearsOld(),' years old');
// console.log(user3.getFullName() ,' is ', user3.getYearsOld(),' years old');

// CONSTRUCTORS

function User(first, last, yearOfBirth) {
    this.firstName = first;
    this.lastName = last;
    this.yearOfBirth = yearOfBirth;
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const constructedUser = new User('Marija', 'Lazic', 1967);
const constructedUser1 = new User('Petra', 'Petric', 1990);

// console.log(constructedUser.getFullName());
// console.log(constructedUser1.getFullName());
