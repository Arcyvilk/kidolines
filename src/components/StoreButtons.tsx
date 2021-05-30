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
`;

export const StoreButtons = (): JSX.Element => {
  return (
    <Wrapper>
      <img src={buttonApple} alt="apple-store-button" />
      <img
        src={buttonGoogle}
        alt="google-play-button"
        style={{ height: '70px', width: 'auto' }}
      />
    </Wrapper>
  );
};
