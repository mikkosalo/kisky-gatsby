import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from "react-spring";
import { useHeight } from "./useHeight";
import Button from './Button';

const StyledBox = styled.div`
  border-radius: 8px;
  background: #fff;
  max-width: 48em;
  padding: 2em;
  box-sizing: border-box;
  margin: auto;
  text-align: left;
  color: #000;
  position: relative;
`;

const FadedBackground = styled.div`
  background: linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%);
  bottom: 0;
  left: 0;
  right: 0;
  height: 250px;
  z-index: 0;
  position: absolute;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  text-align: center;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Box = ({ children, showOnlyTeaser }) => {
  const [show, setShow] = useState(false);
  const [heightRef, height] = useHeight();

  const slideInStyles = useSpring({
    from: { height: 320 },
    to: {
      height: show ? height + 30 : 320
    }
  });

  if (!showOnlyTeaser) {
    return (
      <StyledBox>
        {children}
      </StyledBox>
    );
  }

  return (
    <StyledBox>
      <animated.div style={{ ...slideInStyles, overflow: "hidden" }}>
        <div ref={heightRef}>
          {children}
        </div>
      </animated.div>
      {!show && <FadedBackground />}
      {!show && <ButtonContainer><Button onClick={() => setShow(val => !val)}>Lue lisää</Button></ButtonContainer>}
    </StyledBox>
  );
};

export default Box;
