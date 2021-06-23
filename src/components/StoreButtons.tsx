import React from 'react';
import styled from 'styled-components';
import { buttonGoogle, buttonApple } from '../shared/img';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  img {
    height: auto;
    width: 140px;
    margin: 4px;
    cursor: pointer;
  }
  @media (min-width: 1300px) {
    display: ${({ mobile }: { mobile?: boolean }) =>
      mobile === true ? 'none' : 'flex'};
  }
  @media (max-width: 1300px) {
    display: ${({ mobile }: { mobile?: boolean }) =>
      mobile === false ? 'none' : 'flex'};
  }
`;

export const StoreButtons = ({ mobile }: { mobile?: boolean }): JSX.Element => {
  return (
    <Wrapper mobile={mobile}>
      <img src={buttonApple} alt="apple-store-button" />
      <img
        src={buttonGoogle}
        alt="google-play-button"
        style={{ height: '70px', width: 'auto' }}
      />
    </Wrapper>
  );
};
