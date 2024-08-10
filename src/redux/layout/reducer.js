// src/redux/layout/reducer.js

import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    headerVisible: true,
    footerVisible: true,
  },
  reducers: {
    setHeaderVisible(state, action) {
      state.headerVisible = action.payload;
    },
    setFooterVisible(state, action) {
      state.footerVisible = action.payload;
    },
  },
});

export const { setHeaderVisible, setFooterVisible } = layoutSlice.actions;
export default layoutSlice.reducer;
