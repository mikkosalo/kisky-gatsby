import React from 'react';
import styled from '@emotion/styled';

export const backgroundColorSelector = (color) => {
  switch (color) {
    case 'primary': return '#3299BB';
    case 'light': return '#E9E9E9';
    case 'warning': return '#FF9900';
    default: return '#fff';
  }
};

const textColorSelector = (color) => {
  switch (color) {
    case 'primary': return '#fff';
    case 'warning': return '#fff';
    case 'light': return '#000';
    default: return '#000';
  }
};

const StyledSection = styled.section`
  background: ${props => backgroundColorSelector(props.background)};
  color: ${props => textColorSelector(props.background)};
  text-align: center;
  padding: 1em;

  h1, h2 {
    font-size: 3em;
    margin: 0;
    padding: 0;
    position: relative;
    margin-bottom: 1em;
    z-index: 0;

    &:after {
      content: ' ';
      border: 1px solid #fff;
      position: absolute;
      background-color: #fff;
      height: 3px;
      width: 70px;
      bottom: -7px;
      left: 50%;
      margin-left: -35px;
      -webkit-border-radius: 4px;
      border-radius: 4px;
      background-clip: padding-box;
      z-index: 0;
    }
  }

  ul {
    margin-bottom: 2em;
    
    li {
      margin-bottom: .3em;
    }
  }

  @media (min-width: 960px) {
    padding: 4em;
  }
`;

const Section = ({ children, background, id }) => {
  return (
    <StyledSection background={background} id={id}>
      {children}
    </StyledSection>
  );
};

export default Section;
