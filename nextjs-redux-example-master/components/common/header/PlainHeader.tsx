import Link from "next/link";
import PlainHeaderStyle from './PlainHeader.style';
import styled from 'styled-components';
import {
  SIGNUP_PAGE,
  LOGIN_PAGE,
  ABOUT_PAGE,
  HOME_PAGE
} from 'constants/navigation';

const Header = (props) => (
  <PlainHeaderStyle>
    <Link href={HOME_PAGE}>
      <a  className="header__an">Home</a>
    </Link>

    <Link href={ABOUT_PAGE}>
      <a className="header__an">About</a>
    </Link>


    <Link href={LOGIN_PAGE}>
      <a className="header__an">Login</a>
    </Link>

    <Link href={SIGNUP_PAGE}>
      <a className="header__an">Sign Up</a>
    </Link>
  </PlainHeaderStyle>
);

export default Header;
