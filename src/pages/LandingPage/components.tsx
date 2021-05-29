import styled from 'styled-components';
import bg from '../../shared/img/main.jpg';

export const BGImg = styled.div`
  position: relative;
  opacity: 0.65;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
`;

export const BGImg1 = styled(BGImg)`
  background-image: url(${bg});
  opacity: 1;
  min-height: 100%;
`;

export const BGImg2 = styled(BGImg)`
  background-image: url(${bg});
  min-height: 400px;
`;

export const BGImg3 = styled(BGImg)`
  background-image: url(${bg});
  min-height: 200px;
`;

export const TextSection = styled.div`
  color: #777;
  background-color: white;
  text-align: center;
  padding: 50px 80px;
`;
