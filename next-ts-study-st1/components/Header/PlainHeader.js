import Link from 'next/link';
import {
  PlainHeaderComponent,
  PlainHeaderLink
} from './PlainHeader.style';

const linkStyle = {
  marginRight: 15
}
const Header = () => (
  <header>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/movie" as={`/movie/1`}>
      <a style={linkStyle}>Movie</a>
    </Link>

    <Link href="/todo">
      <a style={linkStyle}>Todo</a>
    </Link>

    {/* <Link href="/blog/[slug]" as="/blog/hello-blog">
      <a style={linkStyle}>blog</a>
    </Link> */}
    
  </header>
)

export default Header;
