import React, { Component } from 'react';
import Chart from './Chart.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceData: {
        labels: ['2020-11-30', '2020-12-01', '2020-12-02'],
        datasets: [
          {
            label: 'Price',
            data: [
              19708.0967,
              18795.1967,
              19226.22
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
          }
        ]
      }
    }
  }

  componentDidMount() {
    //get data
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((thirtyDayData) => {
        console.log('30', thirtyDayData.data.bpi)
        //update state with data

      })
      .catch((error) => {
        console.log(error);
      })


  }


  render() {
    return (
      <div>
        <Chart priceData={this.state.priceData} />
      </div>
    )
  }
}

export default App;