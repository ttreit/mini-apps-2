import React, {Component} from 'react';
import './App.css';
import Board from './components/Board.js';
import gameBoard from './components/gameBoard.js';
import blankBoard from './components/blankBoard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveBoard: [],
      gameOver: false
    }

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  componentDidMount() {
    this.setState({liveBoard: gameBoard});

  }

  handleLeftClick(event) {
    let cellValue = event.target.getAttribute('cellvalue');

    //if click bomb
    if (cellValue === '10') {
      this.setState({gameOver: true});
    } else if (cellValue) {
      console.log('whew not a bomb');
    }
  }

  handleRightClick(event) {
    console.log('Right Click');
  }

  render() {
    return (
      <div>
        <Board contents={this.state.liveBoard} handleLeftClick={this.handleLeftClick} gameOver={this.state.gameOver}/>
      </div>
    );
  }
}

export default App;