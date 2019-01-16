import React, { Component } from "react";
import Navbar from "./components/navbar";
import Items from "./components/items";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Items />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
