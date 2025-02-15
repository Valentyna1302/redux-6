import { createSlice } from "@reduxjs/toolkit";

// 1. Створити початковий стан
// 2. Створити слайс
// 3. Дати йому імя
// 4. Передати йому стан
// 5. Прописати reducers: {}
// 6. Експортувати counterReducer = slice.reducer
// 7. Підключити в сторі новий слайс замість редьюсера старого
// 8. Дадати функції у редьюсер
// 9. Експортувати екшени (наші маленькі ф-ції reducers з slice.actions )
// 10. Використати нові ф - ції  в компонентах вже імпортуючи їх зі слайсу

const initialState = {
  step: 1,
  counter: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => {
      return initialState;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment, decrement, reset, changeStep } = slice.actions;
