import { useEffect, useState } from "react";
import data from "@/database/data";
import { useDispatch } from "react-redux";

//Redux actions
import * as Action from "../redux/question-reducer";

//Custom Hook
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
          setGetData((prev) => ({
            ...prev,
            isLoading: false,
            apiData: question,
          }));

          dispatch(Action.startExamAction({questions}));
        } else {
          throw new Error("Sem questões disponíveis para o Quiz");
        }
      } catch (error) {
        setGetData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    })();
  }, [dispatch]);

  return [getData];
};


//MoveAction Dispatch function
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction)
  } catch (error) {
    console.log(error);
  }
}
//MoveAction Dispatch function
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction)
  } catch (error) {
    console.log(error);
  }
}