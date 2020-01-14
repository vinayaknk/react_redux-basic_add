const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === "ADD_VALUE") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

const store = createStore(rootReducer);
console.log("counter 1 ", store.getState());

store.subscribe(() => {
  console.log("1 ", store.getState());
});

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_VALUE", value: 100 });
console.log("counter 2 ", store.getState());
