// themeSlice.ts

// Import the necessary functions from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define a TypeScript interface for the state.
// This describes the shape of the state object for the theme slice.
interface ThemeState {
  darkMode: boolean;
}

// Define the initial state of the theme slice, using the ThemeState interface.
const initialState: ThemeState = {
  darkMode: false,
};

// Use Redux Toolkit's createSlice function to generate the reducer and actions for the theme slice.
// This automatically creates action creators and case reducers based on the reducers you provide.
const dataSlice = createSlice({
  name: "theme", // The name of the slice. This is used as a prefix for the generated action types.
  initialState, // The initial state of the slice.
  reducers: {
    // The reducers for this slice. Each function you provide will generate
    // a corresponding action creator function and a case reducer function.
    setDarkMode: (state) => {
      // This reducer toggles the value of darkMode in the state.
      state.darkMode = !state.darkMode;
    },
  },
});

// Export the generated action creator function. This allows you to dispatch the action in your components.
export const { setDarkMode } = dataSlice.actions;

// Export the reducer function. This will be combined with other slice reducers to create the root reducer.
export default dataSlice.reducer;

// Define and export a type for the root state of your Redux store. This allows you to use TypeScript with the useSelector hook.
// In this case, we're saying the Redux store contains a single key 'theme', corresponding to the state managed by the theme slice.
export type RootState = {
  theme: ThemeState;
};
