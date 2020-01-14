import * as actionTYPES from "../actions/actionsTypes";

export const saveResult = res =>{
    return{
      type: actionTYPES.STORE_RESULT,
      result: res
    }
  }
  export const storeResult = res => {
    return function(dispatch, getstate){
      setTimeout(()=>{
        dispatch(saveResult(res))
      },2000);
    }
  };
  
  export const deleteResult = value => {
    return {
      type: actionTYPES.DELETE_RESULT,
      resultElId: value
    };
  };
  