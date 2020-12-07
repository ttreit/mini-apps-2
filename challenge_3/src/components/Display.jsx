import React from 'react';

function Display(props) {

  let scores = props.scores;
  let finalScores = props.finalScores;
  return (
  <div>
  <h1>Scorecard</h1>
    <table>
      <thead>
        <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        <th>9</th>
        <th>10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{scores[1][0]} {scores[1][1]}</td>
        <td>{scores[2][0]} {scores[2][1]}</td>
        <td>{scores[3][0]} {scores[3][1]}</td>
        <td>{scores[4][0]} {scores[4][1]}</td>
        <td>{scores[5][0]} {scores[5][1]}</td>
        <td>{scores[6][0]} {scores[6][1]}</td>
        <td>{scores[7][0]} {scores[7][1]}</td>
        <td>{scores[8][0]} {scores[8][1]}</td>
        <td>{scores[9][0]} {scores[9][1]}</td>
        <td>{scores[10][0]} {scores[10][1]}</td>
        </tr>
        <tr>
        <td>{finalScores[1][0]} </td>
        <td>{finalScores[2][0]} </td>
        <td>{finalScores[3][0]} </td>
        <td>{finalScores[4][0]} </td>
        <td>{finalScores[5][0]} </td>
        <td>{finalScores[6][0]} </td>
        <td>{finalScores[7][0]} </td>
        <td>{finalScores[8][0]} </td>
        <td>{finalScores[9][0]} </td>
        <td>{finalScores[10][0]} </td>
        </tr>
      </tbody>
    </table>
  </div>

  );
}


export default Display;