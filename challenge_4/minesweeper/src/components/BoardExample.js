import React from 'react';

function BoardExample(props) {
  return <div>
    <h2>Example Board</h2>
    <table>
      <tbody>
        <tr>
          <td>B</td>
          <td>empty</td>
          <td>empty</td>
        </tr>
        <tr>
          <td>B</td>
          <td>empty</td>
          <td>empty</td>
        </tr>
        <tr>
          <td>empty</td>
          <td>empty</td>
          <td>B</td>
        </tr>
      </tbody>
    </table>

    <h2>Example Answer</h2>
    <table>
      <tbody>
        <tr>
          <td>B</td>
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

export default BoardExample;