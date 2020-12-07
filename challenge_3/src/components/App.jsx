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
        10: [],
        11: []
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
      spares: [],
      total: 0
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
        //check for previous strikes and spares
        if (this.state.strikes.includes(this.state.currentFrame - 1) || this.state.spares.includes(this.state.currentFrame - 1)) {
          console.log(`Frame ${this.state.currentFrame - 1} had a strike or a spare`);
          //add 10 to previous frame finalScore
          console.log('previous frame score is', this.state.finalScores[this.state.currentFrame - 1][0])
          this.state.finalScores[this.state.currentFrame - 1][0] = this.state.finalScores[this.state.currentFrame - 1][0] + 10;
          //if previous was strike check for strike 2 frames back
          if (this.state.strikes.includes(this.state.currentFrame - 1)) {
            if (this.state.strikes.includes(this.state.currentFrame - 2)) {
              this.state.finalScores[this.state.currentFrame - 2][0] = this.state.finalScores[this.state.currentFrame - 2][0] + 10;
            }
          }

        }
        this.setState({currentFrame: this.state.currentFrame +1 })
      } else {
        //Not a strike
        if (this.state.spares.includes(this.state.currentFrame - 1)) {
          console.log(`Frame ${this.state.currentFrame - 1} had a spare`);
          //add total to previous frame finalScore
          console.log('previous frame score is', this.state.finalScores[this.state.currentFrame - 1][0])
          this.state.finalScores[this.state.currentFrame - 1][0] = this.state.finalScores[this.state.currentFrame - 1][0] + this.state.scores[this.state.currentFrame][0];
        } else {
           //if previous was strike check for strike 2 frames back
           if (this.state.strikes.includes(this.state.currentFrame - 1)) {
            if (this.state.strikes.includes(this.state.currentFrame - 2)) {
              console.log(`frame ${this.state.currentFrame - 2} had a strike`);
              this.state.finalScores[this.state.currentFrame - 2][0] = this.state.finalScores[this.state.currentFrame - 2][0] + this.state.scores[this.state.currentFrame][0];
              console.log('TEST', this.state.scores[this.state.currentFrame][0]);

            }
          }
        }
        console.log('move to second half of frame');

      }
    } else {
      //Second half of frame
      let totalFrameScore = this.state.scores[this.state.currentFrame][0] + this.state.scores[this.state.currentFrame][1];
        if (totalFrameScore === 10) {
          this.state.spares.push(this.state.currentFrame);
          this.state.finalScores[this.state.currentFrame].push(totalFrameScore);
          if (this.state.strikes.includes(this.state.currentFrame - 1)) {
            console.log(`Frame ${this.state.currentFrame - 1} had a strike`);
            //add 10 to previous frame finalScore
            console.log('previous frame score is', this.state.finalScores[this.state.currentFrame - 1][0])
            this.state.finalScores[this.state.currentFrame - 1][0] = this.state.finalScores[this.state.currentFrame - 1][0] + 10;
          }
          this.setState({currentFrame: this.state.currentFrame + 1});

        } else {
          this.state.finalScores[this.state.currentFrame].push(totalFrameScore);
          if (this.state.strikes.includes(this.state.currentFrame - 1)) {
            console.log(`Frame ${this.state.currentFrame - 1} had a strike`);
            //add total to previous frame finalScore
            console.log('previous frame score is', this.state.finalScores[this.state.currentFrame - 1][0])
            this.state.finalScores[this.state.currentFrame - 1][0] = this.state.finalScores[this.state.currentFrame - 1][0] + totalFrameScore;
          }
          this.setState({currentFrame: this.state.currentFrame + 1});
        }

    }

    //running total
    //get total
    let runningTotal = 0;
    if (this.state.finalScores[1].length !== 0) {
      for (let i = this.state.currentFrame; i > 0; i--) {
        runningTotal = runningTotal + this.state.finalScores[i][0];
      }
    }
    console.log('TYPEOF', typeof runningTotal, runningTotal);
    if (!isNaN(runningTotal)) {
      this.setState({total: runningTotal});
    }

    //clear newScore state
    this.setState({newScore: ""});

  }

  render() {
    return (
      <div>
        <Display scores={this.state.scores} finalScores={this.state.finalScores} total={this.state.total}/>
        <InputBox handleChange={this.handleChange} handleSubmit={this.handleSubmit} newScore={this.state.newScore} currentFrame={this.state.currentFrame}/>
      </div>
    );
  }
}

export default App;