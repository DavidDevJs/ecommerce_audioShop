import styled from 'styled-components';
import hero_phone from '../../assets/images/phone/hero_phone.jpg';
import hero_desktop from '../../assets/images/desktop/hero_desktop.jpg';
import { device } from '../../deviceStyle';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 40px;
  justify-content: center;
  text-align: center;
  background-image: url(${hero_phone});
  background-image: no-repeat;
  background-size: cover;
  @media ${device.mobileL} {
    background-image: url(${hero_desktop});
    font-size: 20px;
  }
`;

export const ButtonSEE = styled.button`
  margin: 0 auto;
  width: 150px;
  height: 40px;
  margin-block: 20px;
  color: white;
  background: #d9704a;
  font-weight: bold;
`;
