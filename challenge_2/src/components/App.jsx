import React, { Component } from 'react';
import Chart from './Chart.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    //add state
  }

  render() {
    return (
      <div>
        <Chart />
      </div>
    )
  }
}

export default App;