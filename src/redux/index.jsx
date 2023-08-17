import { combineReducers } from "redux";
import counter from "./counter/reducer";
import todo from "./todo/reducer";

// eslint-disable-next-line react-refresh/only-export-components
export default combineReducers({ counter, todo });
