import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTYPES from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment"  clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement"  clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5"      clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr></hr>
                <button onClick={()=>this.props.onStoreResults(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResults =>(
                        <li key={strResults.id}
                        onClick={()=>this.props.onDeleteResults(strResults.id)}>
                            {strResults.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        ctr : state.ctr.counter,
        storedResults: state.res.results
    };
}
const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: ()=> dispatch({type: actionTYPES.INCREMENT}),
        onDecrementCounter: ()=> dispatch({type: actionTYPES.DECREMENT}),
        onAddCounter: ()=> dispatch({type: actionTYPES.ADD, value: 5}),
        onSubtractCounter: ()=> dispatch({type: actionTYPES.SUBTRACT, val: 5}),
        onStoreResults: (result)=> dispatch({type: actionTYPES.STORE_RESULT, result:result}),
        onDeleteResults: (id)=> dispatch({type: actionTYPES.DELETE_RESULT, resultElId:id }),
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Counter);