import styled from 'styled-components';
import { Flex } from './Flex';

export const Gradient = styled(Flex)`
  background: #a8c0ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3f2b96,
    #a8c0ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3f2b96,
    #a8c0ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
