# dtgreeter - Day Time Greeter

A utility function that returns a string greeting according to the users local daytime.

Good morning | afternoon | evening | night.

Can recieve an optional parameter which is the name of the user.

If no user provided returns ex: 'Good morning'

If user is provided returns ex: 'Good morning, John Doe'

## Installation

```bash
npm install dtgreeter
```

or

```bash
yarn add dtgreeter
```

## Usage

```javascript
const dtgreeter = require('dtgreeter');

const greeting = dtgreeter('John Doe');

console.log(greeting);
```

## TypeScript

Package is typescript declared and ready.

## Authors

- [@MisterNooblet](https://www.github.com/MisterNooblet)
