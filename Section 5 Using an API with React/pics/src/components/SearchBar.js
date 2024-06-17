import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    // function SearchBar() {
    const [term, setTerm] = useState('');
    // const handleClick = () => {
        // };
        
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // onSubmit('cats');
        // console.log('I need to tell the parent to do a search');
        // onSubmit(
        //     'cats'
        //     // document.querySelector('input').value   // NEVER DO THIS
        // );

        onSubmit(term);
    };

        const handleChange = (event) => {
            // console.log(event.target.value);
            setTerm(event.target.value);
            // setTerm(event.target.value.replace(/[a-z]/, ''));
        };

    return (
        <div className='search-bar'>
            {/* SearchBar */}
            <form onSubmit={handleFormSubmit}>
                {/* Confirm your search: {term} */}
                <label>Enter Search Term </label>
                <input value={term} onChange={handleChange} />
                {/* {term.length < 3 && 'Term must be longer'} */}
                {/* <input value="hi there!" onChange={handleChange} /> */}
            </form>
            {/* <button onClick={handleClick}>Search</button> */}
        </div>
    );
    }


export default SearchBar;