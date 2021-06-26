import React from 'react';
import styled from 'styled-components';
import { A, Flex, StoreButtons } from '../../components';
import { colors } from '../../shared/theme';

export const Wrapper = styled(Flex)`
  width: 100%;
  box-sizing: border-box;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 8px;
  font-size: 12px;
`;

export default function Footer(): JSX.Element {
  return (
    <Wrapper column align justify wrap>
      <Flex
        row
        justify
        wrap
        style={{ marginBottom: '32px', alignItems: 'flex-start' }}>
        <Flex column align justify>
          <StoreButtons />
        </Flex>
        <Flex column align justify wrap style={{ margin: '0 32px' }}>
          <h3>About us</h3>
          <ul>
            <li>
              <A href="/tos">Terms of Service</A>
            </li>
            <li>
              <A href="/privacy">Privacy policy</A>
            </li>
          </ul>
        </Flex>
        <Flex column align justify wrap style={{ margin: '0 32px' }}>
          <h3>Contact</h3>
          <ul>
            <li>info@kidolines.com</li>
          </ul>
        </Flex>
      </Flex>
      <Flex row align justify wrap>
        © Copyright. All rights reserved | Coded by
        <A
          href="http://www.gada.cz"
          target="_blank"
          rel="noreferrer"
          style={{
            marginLeft: '4px',
          }}>
          gada.cz
        </A>
      </Flex>
    </Wrapper>
  );
}
