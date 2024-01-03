// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function getMessage() {
  return Math.random() > 0.5 ? 'Hello there!' : 'Bye there!';
}

function App() {
  // Code to compute values we want to show in our JSX
  const message = getMessage();
  const score = 10;
  const nums = [1, 2, 3];

  // NOT displayed:
  const bool = false;
  const val = null;
  const someOtherVal = undefined;

  // This will throw an error:
  // const obj = {};

  const name = 'Emmanuel';
  const age = 25;

  // Content we want this component to show
  return (
    <div>
      <h1>{message}</h1>
      <h1>{score}</h1>
      <h1>{nums}</h1>

      <h1>{bool}</h1>
      <h1>{val}</h1>
      <h1>{someOtherVal}</h1>

      <h1>{new Date().toLocaleTimeString()}</h1>

      <h1>
        Hi, my name is {name} and I'm {age}
      </h1>

      {/* !ERROR */}
      {/* <h1>{obj}</h1> */}
    </div>
  );
}

// 5) Show the component on the screen
root.render(<App />);
