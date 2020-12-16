import React from 'react';

function Board(props) {
  return <div>
    <table>
      <tbody>
        {props.contents.map(rows => {
          let row = rows.map(cell => <td>{cell}</td>);
          return <tr>{row}</tr>
        })}
      </tbody>
    </table>
  </div>
}

export default Board;