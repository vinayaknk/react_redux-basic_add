const initialState = {
  counter: 0,
  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADDITION":
      return {
        ...state,
        counter: state.counter + action.value
      };

    case "SUBTRACTION":
      return {
        ...state,
        counter: state.counter - action.value
      };

    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat(state.counter)
      };
    case "DELETE_RESULT":
      return state;
    default:
      return state;
  }
};

export default reducer;
