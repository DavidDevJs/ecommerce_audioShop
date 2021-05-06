import React from 'react';
import { Container, ButtonSEE, P, div } from './HeroStyle';

export const Hero = () => {
  return (
    <>
      <Container>
        <div>
          <P>New Product</P>
          <h1>
            XX99 MARK II <br /> HEADPHONE
          </h1>
          <P>
            Experience natural, lifelike audio and exepcional build quality made
            for the passionate music enthusiast.
          </P>
          <ButtonSEE>SEE PRODUCT</ButtonSEE>
        </div>
      </Container>
    </>
  );
};
