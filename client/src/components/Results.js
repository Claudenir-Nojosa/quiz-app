import Link from "next/link";
import React from "react";
import ResultTable from "./ResultTable";

const Results = () => {
  return (
    <div>
      <h1>Resultado do Quiz</h1>
      <div>
        <div>
          <span>Usuário</span>
          <span>Claudenir</span>
        </div>
        <div>
          <span>Pontos Totais:</span>
          <span>50</span>
        </div>
        <div>
          <span>Total de Perguntas:</span>
          <span>6</span>
        </div>
        <div>
          <span>Total de Tentativas:</span>
          <span>1</span>
        </div>
        <div>
          <span>Total de pontos ganhos:</span>
          <span>50</span>
        </div>
        <div>
          <span>Resultado do Quiz</span>
          <span>Passou!</span>
        </div>
        <div>
          <Link href='/'>Tentar novamente</Link>
        </div>
      </div>
      <ResultTable />
    </div>
  );
};

export default Results;
