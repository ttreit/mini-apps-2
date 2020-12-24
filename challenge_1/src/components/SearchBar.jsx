import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input type='string' placeholder='Search...' value={this.props.inputText} onChange={this.props.handleChange}   />
        </form>
      </div>
    )
  }
}

export default SearchBar;