import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Search...' />
        </form>
      </div>
    )
  }
}

export default SearchBar;