import React, { Component } from 'react';

class InputScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newScore: 0
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

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Score
          <input type="number" value={this.state.newScore} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default InputScore;


