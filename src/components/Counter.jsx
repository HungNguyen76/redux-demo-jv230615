import { useReducer } from "react";
import reducer from "@/redux/counter/reducer";
import { initialState } from "@/redux/counter/reducer";
import { DECREASE, INCREASE } from "@/redux/counter/constants";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log("🚀 ~ file: Counter.jsx:28 ~ Counter ~ count:", count);
  return (
    <div style={{ padding: "0 50px" }}>
      <h1>Counter App</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: INCREASE })}>Increase</button>
      <button onClick={() => dispatch({ type: DECREASE })}>Decrease</button>
    </div>
  );
}
