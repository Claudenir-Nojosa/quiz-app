import React from "react";

const ResultTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Tentativas</td>
            <td>Pontos Conquistados</td>
            <td>Resultado</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Claudenir</td>
            <td>1</td>
            <td>20</td>
            <td>Passou</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
