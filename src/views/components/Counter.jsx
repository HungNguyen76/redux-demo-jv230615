import { useReducer } from "react"
import reducer from "@redux/counter/reducer"
import {initState} from "@redux/counter/reducer"
import { INCREASE, DECREASE} from "@redux/counter/constants"

export default function Counter() {
    const [count, dispatch] = useReducer(reducer, initState)
    console.log("🚀 ~ file: Counter.jsx:8 ~ Counter ~ count:", count)
  return (
    <div>
        <h1>Counter App</h1>
        <p>{count}</p>
        <button onClick={() => dispatch({type: INCREASE})}>Increase</button>
        <button onClick={() => dispatch({type: DECREASE})}>Decrease</button>
    </div>
  )
}
