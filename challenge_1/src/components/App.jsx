import React, { Component } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import Container from './Container.jsx';
import SearchBar from './SearchBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('onChange', event.target.value);
    this.setState({
      inputText: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    async function getData(searchPhrase) {
      let response = await fetch(`http://localhost:3000/events?q=${searchPhrase}`)
      let data = await response.json()
      return data;
    }

    getData(this.state.inputText)
      .then((data) => console.log('DATA', data))
      .then(this.setState({ inputText: ''}))
  }

  render() {
    return (
      <div>
        <SearchBar inputText={this.state.inputText} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Container />
      </div>
    )
  }
}

export default App;