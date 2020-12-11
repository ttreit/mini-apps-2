import React, {Component} from 'react';
import './App.css';
import Board from './components/Board.js';
import boardContents from './components/boardContents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveBoard: [
        [9, 9, 9],
        [9, 9, 9],
        [9, 9, 9]
      ]
    }

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }
  handleLeftClick() {
    console.log('Left Click');
  }

  handleRightClick() {
    console.log('Right Click');
  }

  render() {
    return (
      <div>
        <Board contents={this.state.liveBoard}/>
      </div>
    );
  }
}

export default App;