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
    editTodo: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.todo = action.payload.todo;
    },
  },
});

export const todoReducer = slice.reducer;
export const { deleteTodo, addTodo, editTodo } = slice.actions;
