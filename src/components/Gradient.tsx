import styled from 'styled-components';
import { Flex } from './Flex';

export const Gradient = styled(Flex)`
  background: #5048ed; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #021b79,
    #5048ed
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #021b79,
    #5048ed
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
