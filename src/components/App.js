import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Action"
;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.inc();
  }

  decrement() {
    this.props.dec();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <div>{this.props.currentState}</div>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentState: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => {
      dispatch(actions.increment());
    },

    dec: () => {
      dispatch(actions.decrement());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
