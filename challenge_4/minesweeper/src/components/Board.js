import React from 'react';

function Board(props) {
  return <div>
    <table>
      <tbody>
        {props.contents.map((rows, index) => {
          let row = rows.map((cell, index) => <td key={index} onClick={props.handleLeftClick}>{cell}</td>);
          return <tr key={index}>{row}</tr>
        })}
      </tbody>
    </table>
  </div>
}

export default Board;