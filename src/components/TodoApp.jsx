import { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "../redux/todo/actions";
// import logger from "../redux/todo/logger";
import { useDispatch, useSelector } from "react-redux";

export default function TodoApp() {
  // const [state, dispatch] = useReducer(logger(reducer), initialState)
  const dispatch = useDispatch()
  const todoState = useSelector(state => state.todo)
  const { job, jobs } = todoState;
  const inputRef = useRef();
  const handleSubmit = () => {
    inputRef.current.focus();
    dispatch(addJob(job));
    dispatch(setJob(""));
  };
  return (
    <div style={{ padding: "0 50px" }}>
      <h1>Todo App</h1>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
        placeholder="Enter todo..."
      />
      <button onClick={handleSubmit}>Add todo</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
