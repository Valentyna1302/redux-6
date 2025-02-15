import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{ id: 1, todo: "lalala", isCompleted: false }],
};

const slice = createSlice({
  name: "todos,",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // Item.jsx <button onClick={() => dispatch(deleteTodo(id))}>Delete</button> payload це id
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const todoReducer = slice.reducer;
export const { deleteTodo, addTodo } = slice.actions;
