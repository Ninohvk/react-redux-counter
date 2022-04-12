import React from "react";

export const Counter = () => {
  return (
    <>
      <h1>Counter</h1>
      <p>
        Current value: <span id="counter">0</span>
      </p>
      <button id="increment">+</button>
      <button id="decrementS">-</button>
    </>
  );
};
