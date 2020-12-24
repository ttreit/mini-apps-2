import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type='string' placeholder='Search...' value={this.props.inputText} onChange={this.props.handleChange}   />
          <input className='button' type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

export default SearchBar;