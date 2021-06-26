import styled from 'styled-components';
import { Flex } from '../../components';
import { fonts, colors } from '../../shared/theme';

export const Wrapper = styled(Flex)`
  background-color: ${colors.secondary};
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${fonts.main};
`;
