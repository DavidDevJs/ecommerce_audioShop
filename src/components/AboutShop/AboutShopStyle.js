import styled from 'styled-components';
import { device } from '../../deviceStyle';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  margin-block: 20px;
  text-align: center;
  img {
    height: 320px;
    object-fit: cover;
    border-radius: 10px;
    margin-block-end: 20px;
  }
  div {
    margin: 20px;
  }
  p {
    margin-block-start: 20px;
    color: gray;
  }
  span {
    color: #d9704a;
  }

  @media ${device.tablet} {
    flex-direction: row;
    text-align: start;
    font-size: 19px;
    img {
      order: 2;
    }
  }
`;
