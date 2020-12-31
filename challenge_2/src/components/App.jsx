import React, { Component } from 'react';
import Chart from './Chart.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceData: {
        labels: ['2020-11-30', '2020-12-01', '2020-12-02'],
        datasets: [
          {
            label:'Price',
            data: [
              19708.0967,
              18795.1967,
              19226.22
            ],
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <Chart priceData={this.state.priceData}/>
      </div>
    )
  }
}

export default App;