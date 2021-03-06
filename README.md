# Reducers Lab

![reduce](https://media.giphy.com/media/3o7TKwxYkeW0ZvTqsU/giphy.gif)
## Objectives
1. Write a reducer.
2. The reducer should be a pure function.
3. Write a reducer that takes a payload.

## Overview

Each year, around the holidays especially, we forget who we need to buy presents for.  So let's write a reducer that adds a person who we need to buy a present for, and removes people we no longer like, or who give us socks every year, so we no longer need to buy presents for them.

This function will be our reducer - whose job it is to return to us a new state.

## Instructions

1. In `managePresents.js`, write a function called `managePresents` that takes in an action and the previous state as its argument.
2. In `manageFriends.js` write a function called manageFriends that takes in an action and the previous state as its argument.  Unlike managePresents, here our action will also have a property called `payload`, which is sometimes needed for producing a new state.

  *Note: It is very common for an action to have a `payload` property in addition to `type`, but this is only a convention and there is nothing inherently special about the `payload` property.*
3. Both reducers should be pure functions.  This means that the functions cannot change any object defined outside of the functions.  It also means that given an input, the reducers will always return the same output.

## A Note on the Object Spread Operator, Code from the Future
![future](https://media.giphy.com/media/l0CRCmMBYQbL7dCmI/giphy.gif)

**Note that the object spread operator is not part of ES6, but proposed for future versions of JS.  We can only use it here because of configurations set up in our .babelrc file.  At the time of this writing it will not work in, for instance, the Chrome Developer's Console. But if you want to write some futuristic code you should be familiar with it!**

As the Redux documentation notes:
>Since one of the core tenets of Redux is to never mutate state, you'll often find yourself using Object.assign() to create copies of objects with new or updated values.

If you remember, `Object.assign` is a function that takes any number of arguments. It works by copying over from left to right the properties in each object passed as an argument.  Let's go over an example:

```javascript
let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
// if scooby had a birthday, we could write:
let olderDog = Object.assign({}, dog, {age: dog.age + 1})
```
Translating this to english would be something like, "Start with a new empty object, copy over everything from the original `dog`, then overwrite the `age` property with a new value."

>While effective, using Object.assign() can quickly make simple reducers difficult to read given its rather verbose syntax.

>An alternative approach is to use the object spread syntax proposed for the next versions of JavaScript which lets you use the spread (...) operator to copy enumerable properties from one object to another in a more succinct way

```javascript
let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};

let olderDog = {...dog, age: dog.age + 1}
```
This would translate to the same english, "Return a new object that contains all the key-value pairs from `dog` copied over with the `age` key overwritten with a new value".

## Resources
- [Mozilla Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Redux Docs: Object Spread Operator](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html)
- [Mozilla findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Redux Documentation](http://redux.js.org/docs/basics/Reducers.html)
