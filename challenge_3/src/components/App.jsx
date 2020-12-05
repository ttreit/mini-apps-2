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
      finalScores: [],
      frameCounter: 1,
      newFrame: true,
      newFrameScoresPosition: 0,
      strikes: []
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

    //initiate scoring

    //check if first half of frame is a strike
    // if (this.state.newFrame) {
    //   if (this.state.scores[this.state.newFrameScoresPosition] === 10) {
    //     this.state.strikes.push(this.state.currentFrame);
    //     this.state.finalScores.push(this.state.scores[this.state.newFrameScoresPosition]);
    //     this.state.scores.push("");
    //     this.setState({currentFrame: this.state.currentFrame + 1})
    //     this.setState({newFrame: true});
    //     this.setState({newFrameScoresPosition: this.state.newFrameScoresPosition + 2});
    //   } else {
    //     this.setState({newFrame: false});
    //   }
    // } else {
    //   this.state.finalScores.push(scores[this.state.currentFrame] + scores[this.state.currentFrame - 1])
    // }

    //scoring(this.state.scores);




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