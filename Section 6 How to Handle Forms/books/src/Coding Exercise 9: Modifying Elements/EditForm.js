import React from 'react';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function EditForm({ onSubmit, books }) {
  const first = books[0]
  const [n, setN] = React.useState(first ? first.id : '');
  const [text, setText] = React.useState(first ? first.title : '');
  
  const handleChange = (e) => {
    const id = parseInt(e.target.value);
    setN(id);
    const book = books.find(c => c.id === id);
    if (book) {
        setText(book.title);  
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(n, text);
  };
  
  return <form onSubmit={handleSubmit}>
    <div>
        <label>Id of book to Change</label>
        <select value={n} onChange={handleChange}>
         {books.map(c => <option key={c.id} value={c.id}>{c.id}</option>)}
        </select>
    </div>
    <div>
        <label>New Text</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
    <button>Change</button>
  </form>
}

export { EditForm };
