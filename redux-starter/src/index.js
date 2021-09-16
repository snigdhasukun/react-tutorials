// FUNCTIONAL PROGRAMMING IN JS

function sayHello() {
    return "Hello World";
}

// assign funtion to a variable
let fn = sayHello;
// becomes an alias for the function 
fn();
sayHello();

// HIGER ORDER FUNCTIONS

// pass function as an argument to another function
function greet(fnMessage) {
    console.log(fnMessage());
}

greet(sayHello);


// return another function from a function
function sayHelloFn() {
    return function () {
        return "Hello World";
    }
}

let fn2 = sayHelloFn();
let message = fn2();

// Example of commonly used Higer Order Functions
const numbers = [1, 2, 3];
numbers.map(number => number * 2); // takes function as an argument

setTimeout(() => console.log("Hello"), 1000); // takes function as an argument


// FUNCTION COMPOSITION

let input = "    JavaScript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));


// COMPOSING AND PIPING

import { compose, pipe } from 'lodash/fp';

const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);

const transform1 = pipe(trim, toLowerCase, wrapInDiv);
transform1(input);


// CURRYING

const wrap = type => str => `<${type}>${str}</${type}>`;
const transform2 = pipe(trim, toLowerCase, wrap("div"));
console.log(transform2(input));


// PURE FUNCTIONS
// No Random values
// No current Date / Time
// No global state
// No mutation of parameters


// IMMUTABILITY
// Once created, cannot be changed

let name = "Snigdha"; // strings are immutable in js
let newName = name.toUpperCase();

const book = {} // const prevents reassignment, but it can be changed
book.title = "..." // objects & arrays are mutable in js


// UPDATING OBJECTS

const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
}
const updated = Object.assign({}, person, { name: "Bob", age: 30 })
console.log(updated);
const updated1 = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    },
    name: "Bob"
};
console.log(updated1);
// updated1.address.city = "New York";
console.log(person);


// UPDATING ARRAYS

// Adding

const added = [...numbers, 4];
// add 4 before 2
const index = numbers.indexOf(2);
const added1 = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
];
console.log(added1);

// Removing

const removed = numbers.filter(n => n !== 2);
console.log(removed);

// Updating

const updated2 = numbers.map(n => n === 2 ? 20 : n);
console.log(updated2);


// ENFORCING IMMUTABILITY
// Libraries:
// Immutable
// Immer
// Mori


// IMMUTABLE.JS

let book1 = { title: "Harry Potter" };

function publish(book) {
    book.isPublished = true;
}

publish(book1);

console.log(book1);

import { Map } from 'immutable';

let book2 = Map({ title: "Harry Potter" });
console.log(book2);
console.log(book2.get("title"));
console.log(book2.toJS()); // to get plain js object

function publish1(book) {
    return book.set("isPublished", true);
}

book2 = publish1(book2);

console.log(book2.toJS());


// IMMER

import { produce } from 'immer';

let book3 = { title: "Harry Potter" };

function publish2(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

let updated3 = publish2(book3);
console.log(book3);
console.log(updated3);



// REDUX

// DISPATCHING ACTIONS

import store from './store';

console.log(store);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Store changed! ", store.getState());
})

store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'Bug1'
    }
});
console.log(store.getState());

unsubscribe();

store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
});
console.log(store.getState());


// ACTION TYPES

// state = reducer(state, action)
// notify the subscribers

import * as actions from './actionTypes';

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: 'Bug2'
    }
});
console.log(store.getState());

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
});
console.log(store.getState());


// ACTION CREATORS

import { bugAdded, bugRemoved, bugResolved } from './actions';

store.dispatch(bugAdded('Bug3'));
console.log(store.getState());

store.dispatch(bugResolved(2));
console.log(store.getState());

store.dispatch(bugRemoved(3));
console.log(store.getState());