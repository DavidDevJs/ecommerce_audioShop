import React from 'react';
import { List, Item, Img } from './CategoriesStyles';
import { ArrowScroll } from '../Buttons/ArrowScroll';

let categories = [
  {
    id: 1,
    imgProduct: '../../assets/images/phone/headPhone_category.png',
    title: 'HEADPHONES',
  },
  {
    id: 2,
    imgProduct: '../../assets/images/phone/spk_category.png',
    title: 'SPEAKERS',
  },
  {
    id: 3,
    imgProduct: '../../assets/images/phone/intphone_category.png',
    title: 'EARPHONES',
  },
];

export const Categories = () => {
  return (
    <>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <div>
              <Img src={category.imgProduct} alt={category.title} />
              <h1>{category.title}</h1>
              <p>SHOP</p>
            </div>
          </Item>
        ))}
      </List>
      <ArrowScroll />
    </>
  );
};
