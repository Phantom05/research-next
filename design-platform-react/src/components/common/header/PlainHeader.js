import React, { Component } from 'react';
import Link from 'next/link';
import css from "./header.scss";
import cx from 'classnames';
import { logo, icon_login } from 'components/base/images';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Responsive } from 'components/common/responsive';

const menuList = {
  list: [
    {
      date: "TODAY",
      time: "2019-06-05",
      href: "/",
      alertList: [
        {
          title: "Design Platform Develope1",
          content: "Lorem ipsum doloerherhr sit amet, consectetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravidaetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravid"
        }, {
          title: "System Update Proejct",
          content: "Lorem ipsum doloerherhr sit amet, consectetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravidaetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravid"
        }]

    },
    {
      date: "24 JUN",
      time: "2019-07-20",
      href: "/",
      alertList: [
        {
          title: "Hungry Project",
          content: "content Lorem ipsum doloerherhr sit amet, consectetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravidaetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gra"
        }
      ]
    },
    {
      date: "23 JUN",
      time: "2019-07-21",
      href: "/",
      alertList: [
        {
          title: "project Sleep",
          content: "Lorem ipsum doloerherhr sit amet, consectetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravidaetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravid"
        }
      ]
    },
    {
      date: "21 JUN",
      time: "2019-07-19",
      href: "/",
      alertList: [
        {
          title: "TEST PROject Sleep",
          content: "Lorem ipsum doloerherhr sit amet, consectetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravidaetur adipiscing incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravid"
        }
      ]
    },
  ]
}
class PlainHeader extends Component {
  render() {
    const { isLogged } = this.props;
    return (
      <div className={css.header}>
        <Responsive>
          <Link href="/" >
            <a className={css.link__logo}><img src={logo} alt="" /></a>
          </Link>

          <div className={css.link__box}>
            <Link href="designer">
              <a className={css.link__an}>Designer</a>
            </Link>
            <Link href="client">
              <a className={css.link__an}>Client</a>
            </Link>
            <Link href="project">
              <a className={css.link__an}>Project</a>
            </Link>
            <Link href="guide">
              <a className={css.link__an}>Guide</a>
            </Link>
            <Link href="procing">
              <a className={css.link__an}>Pricing</a>
            </Link>
          </div>

          <div className={css.right__box}>
            {isLogged ?
              'My Project'
              :
              <Link href="login">
                <a><img src={icon_login} /></a>
              </Link>
            }
          </div>
        </Responsive>
      </div>
    );
  }
}

export default PlainHeader;

