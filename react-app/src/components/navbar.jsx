import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   this.setState({ input: e.target.value });
  // }

  handleChange(e) {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            GearGuide
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Search for Items
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    By name
                  </a>
                  <a className="dropdown-item" href="#">
                    By sport
                  </a>
                  <a className="dropdown-item" href="#">
                    By subgroup
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.input}
                onChange={this.handleChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                // onClick={this.props.onSearch}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
