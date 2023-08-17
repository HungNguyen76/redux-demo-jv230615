import { useRef, useReducer } from "react";
import reducer, { initialState } from "../redux/todo/reducer";
import { addJob, deleteJob, setJob } from "../redux/todo/actions";
import logger from "../redux/todo/logger";

export default function TodoApp() {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
//   console.log("🚀 ~ file: TodoApp.jsx:7 ~ TodoApp ~ state:", state);
  const { job, jobs } = state;
//   console.log("🚀 ~ file: TodoApp.jsx:9 ~ TodoApp ~ jobs:", jobs);
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
