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

  const maxValue = 10;

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

      <input
        type="number"
        min={5}
        max={maxValue}
        style={{ backgroundColor: 'tomato', border: '3px solid teal' }}
      />

      {/* Converting HTML to JSX rules: */}

      <div>
        <h2>Text Area:</h2>
        {/* Rule #1 - All prop names follow camelCase (example autoFocus): */}
        <textarea autoFocus={true} />
      </div>

      <div>
        <h2>Max Length 5:</h2>
        {/* Rule #2 - Attributes meant to be numbers should be provided as numbers with curly braces: */}
        <input maxLength={5} />
      </div>

      <div>
        {/* Rule #3 - boolean 'true' can be written with just the property name: */}
        <h2>Spell Check True:</h2>
        <input spellCheck />

        {/* Is equivalent to: */}
        <input spellCheck={true} />
      </div>

      <div>
        <h2>Spell Check False:</h2>
        {/* 'false' should be written with curly braces */}
        <input spellCheck={false} />
      </div>

      {/* Rule #4 - 'class' attribute is written as 'className': */}
      <div className="divider"></div>

      {/* Rule #5 - in-line styles are provided as objects */}
      <div
        style={{ height: '250px', width: '250px', backgroundColor: 'tomato' }}
      ></div>
    </div>
  );
}

// 5) Show the component on the screen
root.render(<App />);
