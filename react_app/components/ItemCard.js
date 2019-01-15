import Link from 'next/link';

class ItemCard extends React.Component {

  render(){
    return(
      <div>
        <div className="card">
          <div className="container">
            <ul><Link href={this.props.item.link}><a>{this.props.item.name}</a></Link></ul>
            <ul>${this.props.item.price}</ul>
            <ul>{this.props.item.website}</ul>
          </div>
        </div>
        <style jsx>{`
          .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            border-radius: 5px; /* 5px rounded corners */
        }
        @import url('https://fonts.googleapis.com/css?family=Ubuntu');
        ul {
          font-family: 'Ubuntu', sans-serif;
        }
        /* Add rounded corners to the top left and the top right corner of the image */
        img {
          border-radius: 5px 5px 0 0;
        }
        .container {
          padding: 2px 16px;
        }
        `}</style>
      </div>)
  }


}

export default ItemCard;
