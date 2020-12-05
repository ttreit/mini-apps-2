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
      scores: [],
      finalScores: [],
      frameCounter: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newScore: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //preserve newScore state
    if (this.state.newScore === "") {
      this.state.scores.push('0');
    } else {
      this.state.scores.push(this.state.newScore);
    }
    //count Frames
    this.setState({frameCounter: this.state.frameCounter + 1 });
    console.log('frameCounter', this.state.frameCounter);
    if (!isOdd(this.state.frameCounter)) {
      this.setState({currentFrame: this.state.currentFrame + 1});
    }
    //initiate scoring
    scoring(this.state.scores);
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