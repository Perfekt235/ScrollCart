import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import styled from 'styled-components';

const MainCont = styled.div`
  padding: 54px;
  min-height: 100vh;
  max-width: 761px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  justify-items: center;
  

  > div:nth-child(odd) {
    transform: translate3d(0px, ${props => -props.scrollPosition / 10}px, 0px);
    
  }

  > div:nth-child(even) {
    transform: translate3d(0px, 0px, 0px);
  }
`;

const ViewPort = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MainCont scrollPosition={scrollPosition}>
      <Cart />
    </MainCont>
  );
};

export default ViewPort;
