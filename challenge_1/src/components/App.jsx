import React, { Component } from 'react';
import Container from './Container.jsx';
import SearchBar from './SearchBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('onChange', event.target.value);
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <SearchBar inputText={this.state.inputText} handleChange={this.handleChange}  />
        <Container />
      </div>
    )
  }
}

export default App;