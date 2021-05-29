import styled from 'styled-components';
import { colors, fonts } from '../../shared/theme';
import bgMain from '../../shared/img/main.jpg';
import bg2 from '../../shared/img/bg2.jpg';
import bg3 from '../../shared/img/bg3.jpg';
import bg4 from '../../shared/img/bg4.jpg';

export const BGImg = styled.div`
  position: relative;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
`;

export const BGImg1 = styled(BGImg)`
  background-image: url(${bgMain});
  opacity: 1;
  min-height: 100%;
`;

export const BGImg2 = styled(BGImg)`
  background-image: url(${bg3});
  min-height: 400px;
  max-height: 400px;
`;

export const BGImg3 = styled(BGImg)`
  background-image: url(${bg2});
  min-height: 700px;
  max-height: 700px;
`;

export const BGImg4 = styled(BGImg)`
  background-image: url(${bg4});
  min-height: 500px;
  max-height: 500px;
`;

export const Caption = styled.div`
  background-color: ${colors.text};
  color: ${colors.secondary};
  font-family: ${fonts.titles};
  text-align: center;
  padding: 8px;
  box-shadow: 0 0 20px ${colors.black};
  border-radius: 8px;

  span {
    font-size: 25px;
  }
`;

export const TextSection = styled.div`
  color: ${colors.primary};
  background-color: ${colors.secondary};
  font-family: ${fonts.main};
  text-align: center;
  padding: 24px 64px;
  box-sizing: border-box;
  box-shadow: 0 0 10px ${colors.black};
  z-index: 2;
`;
