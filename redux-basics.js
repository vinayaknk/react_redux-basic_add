const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter : 0
}
//reducer
const rootReducer = (curState=initialState, action) =>{
    if(action.type==='INC_COUNTER'){
        return{
            ...curState,
            counter: curState.counter +1
        }
    }
    return curState
}

// store
const store = createStore(rootReducer);
console.log(store.getState());

//subscriptions
store.subscribe(()=>{
    console.log(" subscribe ", store.getState())
})

//dispathing action
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value:10})
console.log(store.getState());

