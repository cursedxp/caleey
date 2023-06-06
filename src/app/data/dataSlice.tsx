import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = true;
    },
    setLightMode: (state) => {
      state.darkMode = false;
    },
  },
});
export const { setDarkMode, setLightMode } = dataSlice.actions;
export default dataSlice.reducer;
