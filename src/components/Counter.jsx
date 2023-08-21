// import { useReducer } from "react";
import { useSelector } from "react-redux";
// import reducer from "@/redux/counter/reducer";
// import { initialState } from "@/redux/counter/reducer";
// import { DECREASE, INCREASE } from "@/redux/counter/constants";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@rtk/counterSlice";
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  // const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log("🚀 ~ file: Counter.jsx:28 ~ Counter ~ count:", count);
  return (
    <div style={{ padding: "0 50px" }}>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}
