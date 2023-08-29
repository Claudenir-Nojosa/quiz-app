"use client";
import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

//Importação do Redux Store
import { useSelector } from "react-redux";
//Importação do Custom Hook
import { useFetchQuestion } from "@/hooks/FetchQuestion";
import data from "@/database/data";

const Questions = () => {
  const [checked, setChecked] = useState({});
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const question = data[0];

  const onSelect = () => {
    setChecked((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  if (isLoading) return <h3>Está carregando</h3>;
  if (serverError) return <h3>{serverError.message || "Unknow Error"}</h3>;
  return (
    <div>
      <h2>{question?.question}</h2>

      <ul key={question?.id}>
        {question?.options.map((question, index) => (
          <li key={index}>
            <input
              type="radio"
              value={checked}
              name="options"
              id={`question${index}-option`}
              onChange={onSelect}
            />
            <label htmlFor={`question${index}-option`}>
              <SyntaxHighlighter language="javascript" style={nightOwl}>
                {question.code}
              </SyntaxHighlighter>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
