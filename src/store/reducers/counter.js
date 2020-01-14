import * as actionTYPES from '../actions/actionsTypes'

const intitialState = {
  counter: 0
};

const reducer = (state = intitialState, action) => {
   switch(action.type){
     case actionTYPES.INCREMENT :  
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;  
     case actionTYPES.DECREMENT :return {...state,counter: state.counter - 1};
     case actionTYPES.ADD : return { ...state, counter: state.counter + action.value };
     case actionTYPES.SUBTRACT : return { ...state, counter: state.counter - action.val };
   }
   return state;
  }
  
export default reducer;
