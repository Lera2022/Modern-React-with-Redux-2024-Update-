const { useState, useEffect } = React;

function App() {
  console.clear();
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  useEffect(() => {
    console.log('Called once and never again!');
  }, []);

  useEffect(() => {
    console.log('Called every time!');
  });  
  
  useEffect(() => {
    console.log('CounterOne changed!');
  }, [counterOne]);  
  
  useEffect(() => {
    console.log('CounterTwo changed!');
  }, [counterTwo]);  
  
  useEffect(() => {
    console.log('CounterOne or counterTwo was changed!');
  }, [counterOne, counterTwo]);
  
  return (
    <div className="app">
      <div>
        <button onClick={() => setCounterOne(counterOne + 1)}>++ Counter One</button>               
        <div>
          Counter One Value:
        </div>
        <h3>{counterOne}</h3>
      </div>
      <span className="divide" />
      <div>
        <button onClick={() => setCounterTwo(counterTwo + 1)}>++ Counter Two</button>
        <div>
          Counter Two Value:
        </div>
        <h3>{counterTwo}</h3>
      </div>
    </div>
  );
}

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);

root.render(<App />);