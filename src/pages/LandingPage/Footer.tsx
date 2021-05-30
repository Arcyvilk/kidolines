import React from 'react';
import styled from 'styled-components';
import { Flex, StoreButtons } from '../../components';
import { colors } from '../../shared/theme';

export const Wrapper = styled(Flex)`
  background-color: ${colors.white};
  padding: 8px;
  font-size: 11px;
`;

export default function Footer(): JSX.Element {
  return (
    <Wrapper column align justify>
      <Flex row align justify>
        <h3>Download Kidolines!</h3>
      </Flex>
      <Flex row align justify>
        <StoreButtons />
      </Flex>
      <Flex row align justify>
        © Copyright. All rights reserved | Coded by
        <a
          href="https://www.linkedin.com/in/annagadacz/"
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: '4px' }}>
          Arcyvilk
        </a>
      </Flex>
    </Wrapper>
  );
}
