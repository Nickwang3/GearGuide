import React, { Component } from "react";
import Navbar from "./components/navbar";
import Items from "./components/items";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      isLoggedIn: false,
      searchInput: ""
    };
  }

  handleSearch(input) {
    this.setState({
      searchInput: input
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar onSearch={this.handleSearch} />
        <main className="container">
          <Items searchInput={this.state.searchInput} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
