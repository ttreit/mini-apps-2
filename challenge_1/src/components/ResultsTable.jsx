import React, { Component } from 'react';
import ResultsRow from './ResultsRow.jsx';

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ResultsRow data={this.props.data} />
      </div>
    )
  }
}

export default ResultsTable;