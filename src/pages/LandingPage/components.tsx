import styled from 'styled-components';
import { Flex } from '../../components';
import { fonts, colors } from '../../shared/theme';

export const PhoneShot = styled.img`
  border-radius: 8px;
  box-shadow: 0 0 10px #ccc;
`;

export const CoverWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  @media (min-width: 1500px) {
    justify-content: space-evenly;
  }
  @media (max-width: 1300px) {
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
export const Cover = styled(Flex)`
  background-color: #fff;
  width: 60%;
  max-width: 60%;
  margin: 24px;
  box-sizing: border-box;

  img {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    box-shadow: 0 0 24px 24px #fff;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }

  @media (max-width: 1300px) {
    height: auto;
    width: 100%;
    max-width: 800px;
    margin: 0;
    padding: 12px;
  }
`;

export const CarouselWrapper = styled(Flex)`
  width: 600px;
  height: 700px;
  padding: 24px 48px 0 0;
  box-sizing: border-box;
  @media (max-width: 1300px) {
    padding: 4px 8px;
  }
  @media (max-width: 650px) {
    width: 100%;
    height: 700px;
    padding: 4px 8px;
  }
`;
export const Title = styled.div`
  color: ${colors.primary};
  font-family: ${fonts.titles};
  font-size: 64px;
  margin-top: -2em;
  max-width: 550px;
  text-align: center;
  line-height: 0.8em;
`;

export const Picture = styled.img`
  height: 250px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export const List = styled.div`
  width: 100%;
  font-weight: bold;
  font-family: ${fonts.titles};
  font-size: 2em;
  letter-spacing: 0.1em;
  text-align: center;
`;

export const SubTitle = styled.h3`
  font-family: ${fonts.titles};
  color: ${colors.primary};
  letter-spacing: 0.1em;
  font-size: 1.7em;
`;
