import React, { Component } from 'react';
import Display from './Display.jsx';
import InputBox from './InputBox.jsx';
import scoring from '../scoring.js';
import isOdd from '../isOdd.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newScore: "",
      currentFrame: 1,
      scores: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: []
      },
      finalScores: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: []
      },
      strikes: [],
      spares: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newScore: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //put score in scores dictionary
    if (this.state.newScore === "") {
      this.state.scores[this.state.currentFrame].push(0);
    } else if (this.state.newScore < 0) {
      this.state.scores[this.state.currentFrame].push(Math.abs(parseInt(this.state.newScore)))
    } else {
      this.state.scores[this.state.currentFrame].push(parseInt(this.state.newScore));
    }


    //check if first half of frame is a strike
    //First half of frame?
    if (this.state.scores[this.state.currentFrame].length === 1) {
      //If it is a strike...
      if (this.state.scores[this.state.currentFrame][0] === 10) {
        this.state.strikes.push(this.state.currentFrame);
        this.state.finalScores[this.state.currentFrame].push(10);
      } else {
        //Not a strike
        console.log('move to second half of frame');
      }
    } else {
      //Second half of frame
      if (this.state.scores[0] === 10) {
        this.setState({currentFrame: this.state.currentFrame + 1});
      } else {
        let totalFrameScore = this.state.scores[this.state.currentFrame][0] + this.state.scores[this.state.currentFrame][1];
        if (totalFrameScore === 10) {
          //deal with spare TODO
        } else {
          this.state.finalScores[this.state.currentFrame].push(totalFrameScore);
          this.setState({currentFrame: this.state.currentFrame + 1});
        }
      }

    }






    //clear newScore state
    this.setState({newScore: ""});
  }

  render() {
    return (
      <div>
        <Display scores={this.state.scores} finalScores={this.state.finalScores}/>
        <InputBox handleChange={this.handleChange} handleSubmit={this.handleSubmit} newScore={this.state.newScore} currentFrame={this.state.currentFrame}/>
      </div>
    );
  }
}

export default App;