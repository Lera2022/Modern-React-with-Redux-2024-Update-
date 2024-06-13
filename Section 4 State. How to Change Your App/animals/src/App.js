import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    // NEVER GOING TO...    count = 123;    setCount(123);

    const handleClick = () => {
        //  console.log('Button was clicked!');
        setCount(count + 1);
    };

    return (
        <div>
            {/* Show animal list here! */}
            <button onClick={handleClick}>Add Animal</button>
            <div>Number of animals: {count}</div>
            {/* <button onClick={() => console.log('Button was clicked!')}>
                Add Animal
            </button> */}
        </div>
    );
}

export default App;