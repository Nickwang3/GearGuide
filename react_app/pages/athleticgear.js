import Link from 'next/link';
import Layout from '../components/MyLayout'
import Fetch from 'isomorphic-unfetch'
import ItemCard from '../components/ItemCard'

const AthleticGear = (props) => (
  <Layout>
    <div>
      <h1>Find Athletic Gear and Compare Pricing</h1>
      <ItemCard item={props.item}/>
    </div>
  </Layout>
);

AthleticGear.getInitialProps = async function(){
  const res = await fetch('http://127.0.0.1:5000/items/search/id/790');
  const data = await res.json();

  console.log(data.item)

  return {
    item: data.item
  };

}

export default AthleticGear;
