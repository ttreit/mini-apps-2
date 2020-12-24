import React, { Component } from 'react';
import ResultsRow from './ResultsRow.jsx';
import ResultsTable from './ResultsTable.jsx';
import SearchBar from './SearchBar.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ResultsTable />
        <ResultsRow />
      </div>
    )
  }
}

export default Container;