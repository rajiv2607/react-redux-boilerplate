import * as actions from "./ActionConstannt";

export function increment() {
  return {
    type: actions.INCREMENT
  };
}


export function decrement() {
  return {
    type: actions.DECREMENT
  };
}
