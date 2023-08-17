import { INCREASE, DECREASE } from "./constants";

export const initialState = {
  count: 1
};
const reducer = (state = initialState, action) => {
  console.log("🚀 ~ file: reducer.jsx:7 ~ reducer ~ action:", action)
  switch (action.type) {
    case INCREASE:
      state = {...state, count: state.count + 1}
      return state
    case DECREASE:
      state = {...state, count: state.count - 1}
      return state
    default:
      return state;
  }
};
export default reducer;
