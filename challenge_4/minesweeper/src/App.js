import React, {Component} from 'react';
import './App.css';
import Board from './components/Board.js';
import gameBoard from './components/gameBoard.js';
import blankBoard from './components/blankBoard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveBoard: []
    }

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  componentDidMount() {
    console.log('component did mount');
    this.setState({liveBoard: blankBoard})
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
        <Board contents={this.state.liveBoard} handleLeftClick={this.handleLeftClick}/>
      </div>
    );
  }
}

export default App;