import React from 'react';
import InputScore from './InputScore.jsx';

function InputForm(props) {
  const frame = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
      <h1>Frame {frame[0]}</h1>
      <InputScore />
    </div>
  );
}


export default InputForm;