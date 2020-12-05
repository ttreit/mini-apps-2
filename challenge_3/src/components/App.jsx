import React, { Component } from 'react';
import Display from './Display.jsx';
import InputBox from './InputBox.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newScore: "",
      currentFrame: 5,
      scores: [],
      finalScores: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newScore: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    {console.log(this.state.newScore)}
    //preserve state
    //clear state
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