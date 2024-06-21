import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     // Don't do this!
//     document.body.onclick = () => {
//         // console.log('sdfghjkl');
//         console.log(counter);
//     };
//   }, []);

    // const onClick = () => {
    //     console.log(counter);
    // };

    // useEffect(() => {
    //     // Don't do this!
    //     document.body.onclick = onClick;
    // }, []);

    useEffect(() => {
    // Don't do this!
      // document.body.onclick = () => {
      //   console.log(counter);
      // };

      const listener = () => {
        console.log(counter);
      };

      document.body.addEventListener('click', listener);

      // const cleanUp = () => {
      //   // console.log('cleanUp');
      //   document.body.removeEventListener('click', listener);
      // };

      // return cleanUp;      
      
      return () => {
        document.body.removeEventListener('click', listener);
      };

  }, [counter]);

  return (
    // <div onClick={() => console.log("hi")}>
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  );
}

export default App;