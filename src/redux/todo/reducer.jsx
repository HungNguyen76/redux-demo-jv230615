import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants";

export const initialState = {
  job: "",
  jobs: [],
};

const reducer = (state = initialState, action) => {
  // console.log("🚀 ~ file: reducer.jsx:9 ~ reducer ~ state:", state);
  // console.log("🚀 ~ file: reducer.jsx:9 ~ reducer ~ action:", action);
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      // eslint-disable-next-line no-case-declarations
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      return state;
  }
};
export default reducer;
