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
  justify-content: center;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;

  a {
    font-size: .85em;
    padding: 1rem;
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

    @media (min-width: 600px) {
      font-size: 1.1em;
      padding: 1rem 1.5rem;
    }
  }

  @media (min-width: 800px) {
    justify-content: flex-end;
    padding-right: 2em;
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