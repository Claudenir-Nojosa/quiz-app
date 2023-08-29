import { createSlice } from "@reduxjs/toolkit";

//Criação do reducer
const initialState = {
  queue: [], //Armazenar as questions
  answers: [], //Armazenar as respostas
  trace: 0, //Fazer um tracking da question que o usuário está
};

export const questionReducer = createSlice({
  name: "questions",
  initialState,
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace +1
      }
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1
      }
    }
  },
});

export const { startExamAction, moveNextAction, movePrevAction } = questionReducer.actions;

export default questionReducer.reducer;
