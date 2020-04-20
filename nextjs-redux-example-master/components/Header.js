import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>

    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>

    <Link href="/list">
      <a style={linkStyle}>List</a>
    </Link>
  </div>
);

export default Header;
