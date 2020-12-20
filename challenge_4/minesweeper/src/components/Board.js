import React from 'react';
import GameOver from './GameOver.js';

function Board(props) {
  return <div>
    <GameOver gameOver={props.gameOver}/>
    <table id='board'>
      <tbody>
        {props.contents.map((rows, index) => {
          let row = rows.map((cell, index) => <td key={index} cellvalue={cell} onClick={props.handleLeftClick}>{cell}</td>);
          return <tr key={index}>{row}</tr>
        })}
      </tbody>
    </table>
  </div>
}

export default Board;