import React, { Component } from 'react';
import ResultsRow from './ResultsRow.jsx';
import ResultsTable from './ResultsTable.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ResultsTable />
        <ResultsRow />
      </div>
    )
  }
}

export default Container;