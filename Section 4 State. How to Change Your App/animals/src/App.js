function App() {
    const handleClick = () => {
         console.log('Button was clicked!');
    };

    return (
        <div>
            {/* Show animal list here! */}
            <button onClick={handleClick}>Add Animal</button>
        </div>
    );
}

export default App;