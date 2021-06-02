import React from 'react';
import model from '../../assets/images/optimizations/headphones_model.jpeg';
import { Wrapper } from './AboutShopStyle';

export const AboutShop = () => {
  return (
    <Wrapper>
      <img src={model} alt="Modek with Headphones" />
      <div>
        <h2>
          BRIGING YOU THE <span>BEST</span> AUDIO GEAR{' '}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          deleniti totam distinctio mollitia delectus assumenda beatae sapiente,
          doloribus aliquam architecto facilis sequi dolorum laborum! Quos
          pariatur sint magnam aspernatur cumque.
        </p>
      </div>
    </Wrapper>
  );
};
