import * as actionTYPES from '../actions';

const intitialState = {
    results: []
}

const reducer = (state=intitialState, action) => {

    if(action.type===actionTYPES.STORE_RESULT){
        return {
            ...state, 
            results: state.results.concat({id: new Date(), value:action.result})
        }
    }else if(action.type===actionTYPES.DELETE_RESULT){
        // const id =2;
        // const newArray = [...state.results];
        // newArray.splice(id,1);
    //or
        const newArray = state.results.filter(
            results => results.id !== action.resultElId)
        return {
            ...state, 
            results: newArray
        }
    }
    return state
}

export default reducer;