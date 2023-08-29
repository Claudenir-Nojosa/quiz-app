"use client"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionReducer } from "./question-reducer";
import { resultReducer } from "./result-reducer";

// Juntar os Reducers

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

// Criar a store com os reducers

export default configureStore({
  reducer: rootReducer,
});
