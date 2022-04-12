import React from "react";

export const Counter = (props) => {
  return (
    <>
      <h1>Counter</h1>
      <p>
        Current value: <span id="counter">{props.counter}</span>
      </p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </>
  );
};
