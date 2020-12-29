import React, { Component } from 'react';
import ResultsTable from './ResultsTable.jsx';
import SearchBar from './SearchBar.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar inputText={this.props.inputText} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
        <ResultsTable data={this.props.data} />
      </div>
    )
  }
}

export default Container;