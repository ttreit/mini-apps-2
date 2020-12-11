import React, {Component} from 'react';
import './App.css';
import Board from './components/Board.js';
import boardContents from './components/boardContents';
import blankBoard from './components/blankBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveBoard: [
        [1, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [1, 9, 9, 9, 9, 9, 9, 9, 9, 1]
      ]
    }

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  componentDidMount() {
    this.setState({liveboard:
      [
        [0, 9, 9, 9, 9, 9, 9, 9, 9, 0],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        [0, 9, 9, 9, 9, 9, 9, 9, 9, 0]
      ]
    })
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