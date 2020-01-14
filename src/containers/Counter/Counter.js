import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
// import * as actionTYPES from "../../store/actions/actions";
import * as actionCreators from "../../store/actions/index";

class Counter extends Component {

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 8"clicked={this.props.onSubtractCounter}/>
        <hr></hr>
        <button onClick={() => this.props.onStoreResults(this.props.ctr)}> Store Result</button>
        <ul>
          {this.props.storedResults.map(strResults => (
            <li key={strResults.id} onClick={() => this.props.onDeleteResults(strResults.id)}>
              {strResults.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter, // ctr and res used bcz values coming from different reducers
    storedResults: state.res.results
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.addition(10)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(8)),
    onStoreResults: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResults: id => dispatch(actionCreators.deleteResult(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
