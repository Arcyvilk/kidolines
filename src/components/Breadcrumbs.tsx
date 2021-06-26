import React from 'react';
import styled from 'styled-components';
import { Flex } from './Flex';
import { A } from './A';

const Crumbs = styled(Flex)`
  margin: 16px;
  padding: 0;
  color: black;
`;

type Props = { currentPage: string };
export const Breadcrumbs = (props: Props): JSX.Element => {
  return (
    <Crumbs row>
      <A href="/" style={{ color: 'blue' }}>
        Home
      </A>
      <span style={{ margin: '0 4px' }}>&gt;</span>
      <A style={{ color: 'black' }}>{props.currentPage}</A>
    </Crumbs>
  );
};
