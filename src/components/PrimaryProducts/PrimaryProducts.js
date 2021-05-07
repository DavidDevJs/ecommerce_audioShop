import styled from 'styled-components';
import spk1 from '../../assets/images/optimizations/spk_promo.jpg';
import { device } from '../../deviceStyle';

export const Prom1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 550px;
  max-width: 938px;
  margin: 20px auto;
  padding-inline: 20px;
  border-radius: 10px;
  background-color: #d9704a;
  color: white;
  text-align: center;
  img {
    width: 150px;
    margin-block: 20px;
  }
  p,
  h1 {
    margin-block: 10px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    text-align: start;
    align-items: center;
    height: 400px;
    img {
      width: 300px;
      margin: 30px;
    }
    div {
      margin-inline: 30px;
    }
  }
`;

export const Prom2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 550px;
  max-width: 938px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-image: url(${spk1});
  background-repeat: no-repeat;
  background-size: cover;
  @media ${device.tablet} {
    height: 400px;
    padding-inline: 80px;
    background-position: center;
    align-items: end;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  max-width: 938px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Prom3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 250px;
  max-width: 938px;
  margin: 0 auto;
  padding-inline: 20px;
  border-radius: 10px;
  background-color: #949494;
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: 50%;
  max-width: 938px;
  object-fit: cover;
  margin: 0 auto 10px;
  border-radius: 10px;
  @media ${device.tablet} {
    height: 250px;
    margin-inline-end: 20px;
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? 'black' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: 1px solid ${(props) => (props.primary ? 'transparent' : 'black')};
  width: 150px;
  height: 40px;
  font-weight: bold;
`;
