import React, { Component } from 'react';
import Display from './Display.jsx';
import InputBox from './InputBox.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newScore: 0,
      currentFrame: 1
    }
  }
  render() {
    return (
      <div>
        <Display />
        <InputBox />
      </div>
    );
  }
}

export default App;