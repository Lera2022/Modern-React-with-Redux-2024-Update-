import React from 'react';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function Input({ onSubmit, max }) {
  const [text, setText] = React.useState('');
  const [n, setN] = React.useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text, n);
    setText('');
  };
  
  return <form onSubmit={handleSubmit}>
    <div>
        <label>Color</label>
        <input value={text} onChange={e => setText(e.target.value)} />
    </div>
    <div>
        <label>Insert At Index</label>
        <input type="number" min={0} max={max} value={n} onChange={e => setN(parseInt(e.target.value))} />
    </div>
    <button>Submit</button>
  </form>
}

export { Input };