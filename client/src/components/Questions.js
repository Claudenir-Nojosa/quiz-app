"use client";
import React, { useEffect, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

import data from "../database/data";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  useEffect(() => {
    console.log(data);
  }, []);

  const question = data[0];

  const onPrev = () => {
    console.log("Prev");
  };
  const onNext = () => {
    console.log("Next");
  };
  const onSelect = () => {
    setChecked(true);
    console.log("Radio button change");
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h2>{question.question}</h2>
      <div>
        <ul key={question.id}>
          {question.options.map((question, index) => (
            <li key={index}>
              <input
                type="radio"
                value={checked}
                name="options"
                id={`question${index}-option`}
                onChange={onSelect}
              />
              <label htmlFor={`question${index}-option`}>
                <SyntaxHighlighter language="javascript" style={nightOwl}>{question.code}</SyntaxHighlighter>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={onPrev}>Anterior</button>
        <button onClick={onNext}>Próximo</button>
      </div>
    </div>
  );
};

export default Questions;
