import React, { Component } from "react";
import Item from "./item";
import SearchBar from "./searchbar";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/items/search/name/" + this.props.searchInput)
      .then(response => response.json())
      .then(
        data => {
          this.setState({
            items: data.items,
            isLoading: false
          });
        },

        error => {
          this.setState({
            isLoading: false,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoading, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div>
          <h3 className="text-center">{items.length} Results...</h3>
          <h5 className="text-center">Searched "{this.props.searchInput}"</h5>
          <div>
            {items.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Items;
