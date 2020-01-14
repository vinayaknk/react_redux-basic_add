import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Incr" clicked={this.props.onIncrementCount} />
        <CounterControl label="Decr" clicked={this.props.onDecrementCount} />
        <CounterControl label="Add 10" clicked={this.props.onAdditionCount} />
        <CounterControl label="Sub 8" clicked={this.props.onSubtractionCount} />
        <hr></hr>
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.newResult.map(res => (
            <li onClick={this.props.onDeleteResult}>{res}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    newResult: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCount: () => dispatch({ type: "INCREMENT" }),
    onDecrementCount: () => dispatch({ type: "DECREMENT" }),
    onAdditionCount: () => dispatch({ type: "ADDITION", value: 10 }),
    onSubtractionCount: () => dispatch({ type: "SUBTRACTION", value: 8 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
