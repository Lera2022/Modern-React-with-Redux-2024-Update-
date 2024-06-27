import React from "react";
import { Slider } from "./Slider";
// Udemy's code editor is a little weird...
// We do *not* need an 'import {useState}' line

function App() {
  const [age, setAge] = useState(50);

  const handleAgeChange = (newAge) => {
    setAge(newAge);
  };

  return <Slider value={age} onChange={handleAgeChange} />;
}

const useState = React.useState;
export default App;
