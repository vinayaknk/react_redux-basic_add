import * as actionTYPES from '../actions';

const intitialState = {
    counter : 0,
}

const reducer = (state=intitialState, action) => {

    if(action.type===actionTYPES.INCREMENT){
        const newState = Object.assign({},state);
        newState.counter = state.counter + 1;
        return newState;
    }else if(action.type===actionTYPES.DECREMENT){
        return{
            ...state, counter: state.counter - 1   }
    }else if(action.type===actionTYPES.ADD){
        return{ ...state, counter: state.counter + action.value   }
    }else if(action.type===actionTYPES.SUBTRACT){
        return{ ...state, counter: state.counter - action.val  }
    }
    return  state ;
}
 
export default reducer;