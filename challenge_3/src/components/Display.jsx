import React from 'react';

function Display(props) {

  const scores = [1, 0, 0, 7, 1, 5];
  const finalScores = [1, 7, 6];
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
        <td>{scores[0]} {scores[1]}</td>
        <td>{scores[2]} {scores[3]}</td>
        <td>{scores[4]} {scores[5]}</td>
        <td>{scores[6]} {scores[7]}</td>
        <td>{scores[8]} {scores[9]}</td>
        <td>{scores[10]} {scores[11]}</td>
        <td>{scores[12]} {scores[13]}</td>
        <td>{scores[14]} {scores[15]}</td>
        <td>{scores[16]} {scores[17]}</td>
        <td>{scores[18]} {scores[19]}</td>
        </tr>
        <tr>
        <td>{finalScores[0]} </td>
        <td>{finalScores[1]} </td>
        <td>{finalScores[2]} </td>
        <td>{finalScores[3]} </td>
        <td>{finalScores[4]} </td>
        <td>{finalScores[5]} </td>
        <td>{finalScores[6]} </td>
        <td>{finalScores[7]} </td>
        <td>{finalScores[8]} </td>
        <td>{finalScores[9]} </td>
        </tr>
      </tbody>
    </table>
  </div>

  );
}


export default Display;