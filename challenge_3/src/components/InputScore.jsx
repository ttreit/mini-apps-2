import React, { Component } from 'react';

class InputScore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Enter Score:
          <input type="number" value={this.props.newScore} onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}



export default InputScore;


