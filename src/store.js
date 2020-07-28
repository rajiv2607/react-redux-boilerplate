import { createStore } from "redux";
import reducer from "./reducers/reducer";

let store =  createStore(reducer);
export default store
