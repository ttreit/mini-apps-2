import React, { Component } from 'react';
import CurrentFrame from './CurrentFrame.jsx'
import Display from './Display.jsx';
import InputForm from './InputForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO Add STATES
    }
  }
  render() {
    return (
      <div>
        <Display />
        <InputForm />
      </div>
    );
  }
}
export default App;