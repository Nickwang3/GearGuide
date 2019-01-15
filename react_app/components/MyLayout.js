import Head from 'next/head'
import Link from 'next/link';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>GearGuide</title>
    </Head>
    <Navbar/>
     {props.children}
  </div>


)

export default Layout;
