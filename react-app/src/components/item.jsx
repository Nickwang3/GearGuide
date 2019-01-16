import React, { Component } from "react";

class Item extends Component {
  state = {
    id: this.props.item.id,
    name: this.props.item.name,
    sport: this.props.item.sport,
    subgroup: this.props.item.subgroup,
    price: this.props.item.price,
    link: this.props.item.link,
    website: this.props.item.website,
    upvotes: 0
  };

  handleIncrement = item => {
    this.setState({ upvotes: this.state.upvotes + 1 });
  };

  //adjusts price display incase of no price
  Price(props) {
    const price = props.item.price;
    if (!price) {
      return <span>Check link for price</span>;
    } else if (price === "See Link") {
      return <span>Check link for price</span>;
    } else {
      return <span>${price}</span>;
    }
  }

  render() {
    return (
      <div className="card-body">
        <div className="card-title font-weight-bold">{this.state.name}</div>
        <div className="card-text font-italic">{this.Price(this.props)}</div>
        <a href={this.state.link} className="btn btn-primary">
          <span>Buy here</span>
        </a>
        <button
          onClick={item => this.handleIncrement(item)}
          className="btn btn-info"
          type="submit"
        >
          Like
        </button>
        <span className={this.getBadgeClasses()}>{this.state.upvotes}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes += this.state.upvotes === 0 ? "warning" : "success";
    return classes;
  }
}

export default Item;
