import React from 'react';
import { render } from 'react-dom';

function ResultsRow(props) {
  const data = props.data;
  const listRows = data.map((row) =>
    <li>
      {row.description}
    </li>
  );

  return (
    <div>
      <ul>
        {listRows}
      </ul>
    </div>
  )

}

export default ResultsRow;