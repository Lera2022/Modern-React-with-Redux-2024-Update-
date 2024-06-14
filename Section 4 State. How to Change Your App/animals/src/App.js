import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

// console.log(getRandomAnimal());

function App() {
    const [animals, setAnimals] = useState([]);

    // function makeArray() {
    //     return [1, 10, 32, 40];
    // }

    // // const myArray = makeArray();
    // // const firstElement = myArray[0];
    // // const secondElement = myArray[1];

    // const [firstElement, secondElement] = makeArray();
    // console.log(firstElement, secondElement);

    // const [count, setCount] = useState(0);
    // const [value, setValue] = useState(0);

    // console.log(useState(50));

    // NEVER GOING TO...    count = 123;    setCount(123);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
        //  console.log('Button was clicked!');
        // setCount(count + 1);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div className='app'>
            {/* Show animal list here! */}
            <button onClick={handleClick}>Add Animal</button>
            {/* <div>{animals}</div> */}
            <div className='animal-list'>{renderedAnimals}</div>
            {/* <div>Number of animals: {count}</div> */}
            {/* <button onClick={() => console.log('Button was clicked!')}>
                Add Animal
            </button> */}
        </div>
    );
}

export default App;