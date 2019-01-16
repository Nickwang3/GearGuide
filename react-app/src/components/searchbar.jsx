import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="m-4">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search.."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" className="btn btn-secondary btn-sm m-1" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
