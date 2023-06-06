import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});
export const { setDarkMode } = dataSlice.actions;
export default dataSlice.reducer;
