import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const buttonColorSelector = (color) => {
  switch (color) {
    case 'white': return '#fff';
    case 'light': return '#000';
    default: return '#000';
  }
};

const baseStyles = (color) => `
  padding: .4em 1.2em;
  border-radius: 2em;
  border: 2px solid ${buttonColorSelector(color)};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.3em;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: all .2s ease-in-out;
  color: ${buttonColorSelector(color)};
  outline: none;

  &:hover {
    background-color: #fff;
    color: #424242;
  }
`;

const StyledA = styled.a`
  ${(props) => baseStyles(props.color)}
`;

const StyledButton = styled.button`
  ${(props) => baseStyles(props.color)}
`;

const StyledLink = styled(props => <Link {...props} />)`
  ${(props) => baseStyles(props.color)}
`;

const Button = ({ children, to, onClick, href, color }) => {
  if (onClick) {
    return <StyledButton color={color} onClick={onClick}>{children}</StyledButton>;
  }

  if (to) {
    return <StyledLink color={color} to={to}>{children}</StyledLink>;
  }

  if (href) {
    return <StyledA color={color} href={href}>{children}</StyledA>;
  }

  return null;
}

export default Button;
