import React, {Component} from 'react';
import './App.css';
import Board from './components/Board.js';
import gameBoard from './components/gameBoard.js';
import blankBoard from './components/blankBoard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveBoard: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [2, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [3, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [4, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [5, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [6, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [7, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [8, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
      ]
    }

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  componentDidMount() {
    console.log('component did mount');
    this.setState({liveBoard: blankBoard})
    // this.setState({liveBoard: })
  }

  handleLeftClick(event) {
    console.log('Left Click');
    //update state with gameBoard cell
      //get cell that was clicked on
      //
  }

  handleRightClick(event) {
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