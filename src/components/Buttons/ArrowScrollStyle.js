import styled from 'styled-components';
import { device } from '../../deviceStyle';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 270px;
  @media ${device.tablet} {
    display: none;
    bottom: 90px;
  } ;
`;

export const SvgRight = styled.svg`
  width: 20px;
  margin-inline: 20px;
`;

export const SvgLeft = styled.svg`
  width: 20px;
  margin-inline: 20px;
`;
