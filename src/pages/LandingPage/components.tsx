import styled from 'styled-components';
import { Flex } from '../../components';
import main from '../../shared/img/main.jpg';
import { fonts, colors } from '../../shared/theme';

export const Wrapper = styled(Flex)`
  background-color: ${colors.secondary};
  /* background-image: url(${main}); */
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${fonts.main};
`;

export const Section = styled(Flex)`
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #ccc;
  background-color: ${colors.white};
`;

export const PhoneShot = styled.img`
  border-radius: 8px;
`;
