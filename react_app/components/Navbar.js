import Link from 'next/link';

const Navbar = () => (
  <div>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/athleticgear"><a>Athletic Gear</a></Link></li>
      <li><Link href="/createaccount"><a>Create an Account</a></Link></li>
    </ul>

    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
      }

      li {
        float: left;
      }

      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      /* Change the link color to #111 (black) on hover */
      li a:hover {
        background-color: #ff8000;
      }
      .active {
        background-color: #4CAF50;
      }
      `}</style>

  </div>
);

export default Navbar;
