import React from 'react';
import { Link } from 'gatsby';
import styled from "@emotion/styled";

const menuItems = [
  { to: '/', name: 'Etusivu' },
  { to: '/keivi/', name: 'Keivi' },
  { to: '/seura/', name: 'Seura' },
  { to: '/yhteystiedot/', name: 'Yhteystiedot' }
];

const MenuContainer = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
  display: flex;
  flex: 1 1 auto;
  padding-right: 2em;

  a {
    padding: 1em;
    text-decoration: none;
    color: #696969;
    align-self: center;
    border-radius: 6px;
    transition: all .2s ease-in-out;

    &:hover {
      color: black;
      background: #E9E9E9;
    }

    &.active {
      color: black;
    }
  }
`;

const Navigation = () => {
  return (
    <MenuContainer>
      {menuItems.map((item) => (
        <Link to={item.to} key={item.to} activeClassName="active">{item.name}</Link>
      ))}
    </MenuContainer>
  );
};

export default Navigation;