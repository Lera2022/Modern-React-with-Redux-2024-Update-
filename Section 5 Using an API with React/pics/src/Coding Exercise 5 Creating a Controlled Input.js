function App() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <div>
                Enter some text
            </div>
            <input value={value} onChange={handleChange} />
            <h3>Your Text</h3>
            <p>{value}</p>
        </div>
    )
}