import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='chart'>
          <Line
            data={this.props.priceData}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <h6>
        Powered by <a href='https://www.coindesk.com/price/bitcoin'>CoinDesk</a>
          </h6>
      </div>
    )
  }
}

export default Chart;