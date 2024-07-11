import { produce } from "immer";
import { useReducer, useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
// const SET_VALUE_TO_ADD = 'set-value-to-add'
const SET_VALUE_TO_ADD = "change_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  // return {
  //   ...state,
  //   count: state.count + 1,
  // };

  switch (action.type) {
    case INCREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count + 1,
      // };

      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count - 1,
      // };

      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      // return {
      //   ...state,
      //   count: state.count + state.valueToAdd,
      //   valueToAdd: 0,
      // };

      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case SET_VALUE_TO_ADD:
      // return {
      //   ...state,
      //   valueToAdd: action.payload,
      // };

      state.valueToAdd = action.payload;
      return;
    default:
      // throw new Error("unexpected action type" + action.type);
      // return state;

      return;
  }

  // if (action.type === "increment") {
  // if (action.type === INCREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }

  // // if (action.type === "change-value-to-add") {
  // if (action.type === SET_VALUE_TO_ADD) {
  // return {
  //   ...state,
  //   valueToAdd: action.payload,
  // };
  // }

  // return state;
};

// import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
  // const { count, increment } = useCounter(initialCount);

  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log(state);

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      // type: "increment",
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    // setCount(count - 1);

    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      // type: "change-value-to-add",
      type: SET_VALUE_TO_ADD,
      payload: value,
    });

    // setValueToAdd(value);

    // console.log(typeof value);
    // console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    // <div>
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      {/* </div> */}
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
