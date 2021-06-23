import React from 'react';
import styled from 'styled-components';
import { Flex, StoreButtons } from '../../components';
import { colors } from '../../shared/theme';

export const Wrapper = styled(Flex)`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 8px;
  font-size: 12px;
`;

export default function Footer(): JSX.Element {
  return (
    <Wrapper column align wrap justify>
      <Flex row align justify wrap style={{ marginBottom: '32px' }}>
        <Flex column align justify wrap style={{ margin: '0 32px' }}>
          <h3>Contact us!</h3>
          <ul>
            <li>tel. +11 111 222 333</li>
            <li>info@kidolines.app</li>
            <li>Street 2, 1729 City</li>
          </ul>
        </Flex>
        <Flex column align justify>
          <StoreButtons />
        </Flex>
      </Flex>
      <Flex row align justify wrap>
        © Copyright. All rights reserved | Coded by Arcyvilk
        {/* <a
          href="https://www.linkedin.com/in/annagadacz/"
          target="_blank"
          rel="noreferrer"
          style={{
            marginLeft: '4px',
            color: colors.white,
            textDecoration: 'none',
          }}>
          Arcyvilk
        </a> */}
      </Flex>
    </Wrapper>
  );
}
