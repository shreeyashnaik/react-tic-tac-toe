
# React Tic-Tac-Toe

A tic-tac-toe game using React JS

## Below are all the Learnings:

### A Component named Square:

```javascript
export default function Square() {
  return <button className="square">X</button>;
}
```
Component should be accessed as below:
``` 
<Square prop1={prop1} prop2={prop2}/>
```

### export JavaScript keyword:
Makes function accessible outside of current file

### default keyword: 
Tells other files using your code that it’s the main function in the current file


### A JSX element:
Combination of JavaScript code and HTML tags like
```<button>``` is a JSX element

### index.js:
Bridge between the components and browser

### React library: 
```import { StrictMode } from 'react';```

### React’s library to talk to web browsers:
```import { createRoot } from 'react-dom/client';```


### Fragments ```<>``` and ```</>```:
To wrap multiple adjacent JSX elements

#### Browser divs: ```<button/>``` can start with lower case
#### Custom components: ```<Board/> <Square/>``` must start with a capital letter


### Prop:
className="square" is a button property or a prop

### Passing data through PROPS #######
```javascript
function Square({ value }) {
  return <button className="square">{value}</button>;
}
```
function Square({ value }) indicates:\
The Square component can be passed a prop called value.

To “escape into JavaScript” from JSX, you need { curly braces }

#### Use onSomething names for props which represent events
#### Use handleSomething for the function definitions which handle those events


### USESTATE HOOK in React #########
=> To “remember” things, components use state.\
\
In Square component you define:\
```const [val, setVal] = useState(null);```\
null = initial val\
setVal = function to set new val eg. setVal('X');


### PARENT STATE (SHARED STATE) #######
In Board component you define\
```const [squares, setSquares] = useState(Array(9).fill(null));```

Pass value down to the Square component\
<Square value={squares[0]} />

### RE-RENDERING ######
After calling any setState(),\
Current & its child components are re-rendered\
Also the child components that weren’t affected by the change are re-rendered.


### ASSIGNING KEYS TO DYNAMIC LISTS #####
```javascript
<li key={user.id}>
  {user.name}: {user.taskCount} tasks left
</li>
```
Strongly recommended,
to assign proper keys to build dynamic lists like below:
```javascript
<li key={user.id}>
```