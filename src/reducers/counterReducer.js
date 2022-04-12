const INITITAL_STATE = {
  counter: 0,
};

export function counterReducer(state = INITITAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
