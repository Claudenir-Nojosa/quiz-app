"use client";

import React, { useState } from "react";
import Questions from "@/components/Questions";
import { useSelector, useDispatch } from "react-redux";
import { MovePrevQuestion, MoveNextQuestion } from "../../hooks/FetchQuestion";

const Quiz = () => {
  const [check, setChecked] = useState(undefined);
  const { queue, trace } = useSelector((state) => state);
  const dispatch = useDispatch();

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  }
  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }
  function onChecked(check) {
    setChecked(check);
  }


  return (
    <div>
      <h1>Quiz</h1>
      <Questions onChecked={onChecked} />
      <div>
        <button onClick={onPrev}>Anterior</button>
        <button onClick={onNext}>Próximo</button>
      </div>
    </div>
  );
};

export default Quiz;
