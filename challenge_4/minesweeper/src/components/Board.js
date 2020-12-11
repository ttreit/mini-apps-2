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
          <td>2</td>
          <td></td>
        </tr>
        <tr>
          <td>B</td>
          <td>3</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>B</td>
        </tr>
      </tbody>
    </table>
  </div>
}

export default Board;