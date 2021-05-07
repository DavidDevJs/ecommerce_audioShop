import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Categories } from '../../components/Categories/Categories';
import { PrimaryProducts } from '../../components/PrimaryProducts/PrimaryProducts.jsx';

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <PrimaryProducts />
    </>
  );
};
