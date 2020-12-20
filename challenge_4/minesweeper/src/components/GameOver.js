import React from 'react';

function GameOver(props) {
  console.log('props', props)
  if (props.gameOver) {
    return (
      <div>
        <h1>Game Over!</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Good Luck</h1>
      </div>
    )
  }
}

export default GameOver;