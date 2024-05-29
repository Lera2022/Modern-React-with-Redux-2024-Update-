// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  // <h4>this is an element!</h4>
  // let message = 'Bye there!'
  // if (Math.random() > 0.5) {
  //   message = 'Hello there!';
  // }
  // const message = 'sdfghj';
  // const message = 123456789;
  // const message = true;
  // const message = false;
  // const message = null;
  // const message = undefined;
  // const message = [1, 2, 3];
  const message = {};

  // return <h1>Hi there!</h1>;
  // return <h1>{message}</h1>;
  return <h1>{new Date().toLocaleTimeString()}</h1>;  // zip 004
}

// 5) Show the component on the screen
root.render(<App />);