import { useReducer, useState } from 'react'

//useReducer
//1. initState
const initState = 0;
//2. Action
const UP_ACTION = "UP"
const DOWN_ACTION = "DOWN"
//3. Reducer
const reducer = (state, action) => {
    console.log("🚀 ~ file: reducer.jsx:11 ~ reducer ~ state:", state)
    console.log("🚀 ~ file: reducer.jsx:11 ~ reducer ~ action:", action)
    switch(action) {
        case "UP":
            return state + 1
        case "DOWN":
            return state - 1
        default:
            return state
    }
}
//4. Dispatch
export default function Reducer() {
    // const [count, setCount] = useState(0)
    const [count, dispatch] = useReducer(reducer, initState)
    console.log("🚀 ~ file: reducer.jsx:26 ~ Reducer ~ useReducer(reducer, initState):", useReducer(reducer, initState))
  return (
      <div style={{padding: "0 20px"}}>
        <p>{count}</p>
        <button onClick={() => dispatch(UP_ACTION)}>+</button>
        <button onClick={() => dispatch(DOWN_ACTION)}>-</button>
    </div>
  )
}
