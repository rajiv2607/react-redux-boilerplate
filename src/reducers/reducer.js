import * as actions from "../actions/ActionConstannt";

let initialState = {
  counter: 0
};

export default function reducer(state = initialState, action) {
  console.log('in reducer')
  switch (action.type) {
    case actions.INCREMENT: {
      state = {...state, counter : state.counter + 1}
      return {
        ...state
      };
    }

    case actions.DECREMENT: {
      if(state.counter >0) {
        state = {...state, counter : state.counter - 1}
      }
      return {
        ...state
      };
    }

    default:
      return state;
  }
}
