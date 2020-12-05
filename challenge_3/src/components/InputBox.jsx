import React from 'react';
import InputScore from './InputScore.jsx';

function InputBox(props) {

  return (
    <div>
      <h1>Frame {props.currentFrame}</h1>
      <InputScore newScore={props.newScore} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
    </div>
  );
}


export default InputBox;