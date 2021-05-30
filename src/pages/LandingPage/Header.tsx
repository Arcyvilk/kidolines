import React from 'react';
import styled from 'styled-components';
import { fonts, colors } from '../../shared/theme';
import { Gradient, StoreButtons } from '../../components';

export const Wrapper = styled(Gradient)`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  position: sticky;
  top: -1px;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${fonts.titles};
  letter-spacing: 0.1em;
  color: ${colors.secondary};
`;

export default function Header(): JSX.Element {
  return (
    <Wrapper>
      <Title>Kidolines</Title>
      <StoreButtons />
    </Wrapper>
  );
}
