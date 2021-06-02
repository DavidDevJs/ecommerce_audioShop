import React, { useState } from 'react';
import { Wrapper, SvgRight, SvgLeft } from './ArrowScrollStyle';
import { device } from '../../deviceStyle';

export const ArrowScroll = () => {
  //Pendiente manejar el render condicional con el numero de categorias
  const [width, setWidth] = useState(dev);
  return (
    <Wrapper>
      <SvgRight
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </SvgRight>
      <SvgLeft
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </SvgLeft>
    </Wrapper>
  );
};
