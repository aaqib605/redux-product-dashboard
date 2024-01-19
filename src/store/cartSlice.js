import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      const id = action.payload;
      return state.filter((product) => product.id !== id);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
