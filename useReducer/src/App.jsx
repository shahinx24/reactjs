import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } 
  else if (action.type === "DECREMENT") {
    return state - 1;
  } 
  else if (action.type === "RESET") {
    return 0;
  } 
  else {
    return state;
  }
}

export default function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}