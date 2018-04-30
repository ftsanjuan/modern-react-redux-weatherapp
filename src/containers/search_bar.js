import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // binds onInputChange to 'this' (SearchBar) and overwrites
    // the local method onInputChange so that it has the proper context.
    // whenever you have a callback function (like the onChange callback below
    // onInputChange()) you need to bind the context of 'this' to the Component
    this.onInputChange = this.onInputChange.bind(this);
    // same as above
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // disallow form submit with "enter"
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    // reset the component's value to be empty
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);