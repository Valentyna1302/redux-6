import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoReducer } from "./counter/todoSlice";
import { filterReducer } from "./counter/filterSlice";

const persistConfig = {
  key: "counter-persist",
  version: 1,
  storage,
  // blacklist: ["step"], якщо не хочемо щось щось записувалось в local storage
  // whitelist: ["counter"], з великої кількості якщо хочемо щось конкретне записати
};

export const store = configureStore({
  reducer: {
    counter: persistReducer(persistConfig, counterReducer),
    todos: todoReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
