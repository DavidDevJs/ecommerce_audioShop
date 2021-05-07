import styled from 'styled-components';
import { device } from '../../deviceStyle';

export const List = styled.ul`
  display: flex;
  margin: 0 auto;
  width: 80vw;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  overflow-y: hidden;
  @media ${device.tablet} {
    justify-content: center;
    overflow: hidden;
  }
`;

export const Img = styled.img`
  scroll-snap-align: center;
  margin-inline: 20px;
  @media ${device.tablet} {
    height: 100px;
    margin-block: 20px;
    margin-inline: 60px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 12px;
`;
