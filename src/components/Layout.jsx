import * as React from 'react';
import Navigation from './Navigation';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Main = styled.main`
  padding: 0;
  margin: 0;
  background: #424242;
  height: 100%;
  position: relative;
`;

const Nav = styled.nav`
  background: #fff;
  display: flex;
  background: #fff;
`;

const Footer = styled.footer`
  padding: 3.5em;
  color: #999;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 2.4em;
  line-height: 1;
  padding: .5em 1em;
  color: #424242;
  text-transform: uppercase;
  box-sizing: border-box;
  margin: 0;
  z-index: 10;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #696969;
  }

  i {
    color: #FF9900;
    text-decoration: none;
    font-style: normal;
  }

  span {
    font-size: 1rem;
    white-space: nowrap;
    color: #ADADAD;
    text-transform: none;
    display: block;
  }
`;

const Layout = ({ children, title }) => {
  const year = new Date().getFullYear();

  return (
    <Main>
      <Nav className="navigation">
        <Logo className="logo">
          <Link to="/">Ki<i>s</i>ky<span>Kirkkonummen Seudun Kiipeilijät Ry</span></Link>
        </Logo>
        <Navigation />
      </Nav>
      {children}
      <Footer className="container">
          &copy; {year} - Kirkkonummen Seudun Kiipeilijät Ry
      </Footer>
    </Main>
  );
};

export default Layout;