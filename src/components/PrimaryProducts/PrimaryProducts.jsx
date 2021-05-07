import React from 'react';
import earPromo from '../../assets/images/optimizations/earph_promo.jpg';
import spk2 from '../../assets/images/optimizations/spk2.png';
import { Prom1, Prom2, Prom3, Img, Button, Wrapper } from './PrimaryProducts';

export const PrimaryProducts = () => {
  return (
    <>
      <Prom1>
        <img src={spk2} alt="SPEAKER" />
        <div>
          <h1>
            ZX9 <br /> SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally build to deliver
            truly remarkable sound
          </p>
          <Button primary>SEE PRODUCT</Button>
        </div>
      </Prom1>
      <Prom2>
        <h1>ZX7 SPEAKER</h1>
        <Button>SEE PRODUCT</Button>
      </Prom2>
      <Wrapper>
        <Img src={earPromo} alt="Earphones" />
        <Prom3>
          <h1>YX1 EARPHONES</h1>
          <Button>SEE PRODUCT</Button>
        </Prom3>
      </Wrapper>
    </>
  );
};
