import React from 'react';

// function createTable(props) {
//   return props.contents.map(())
// }

function Board(props) {
  return <div>
    <table>
      <tbody>
        <tr>
          <td>{props.contents[0][0]}</td>
          <td>{props.contents[0][1]}</td>
          <td>{props.contents[0][2]}</td>
        </tr>
        <tr>
          <td>{props.contents[1][0]}</td>
          <td>{props.contents[1][1]}</td>
          <td>{props.contents[1][2]}</td>
        </tr>
        <tr>
          <td>{props.contents[2][0]}</td>
          <td>{props.contents[2][1]}</td>
          <td>{props.contents[2][2]}</td>
        </tr>
      </tbody>
    </table>
  </div>
}

export default Board;