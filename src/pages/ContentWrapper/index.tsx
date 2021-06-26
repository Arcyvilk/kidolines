import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Wrapper } from './components';

type Props = {
  children: React.ReactNode;
};

export default function ContentWrapper(props: Props): JSX.Element {
  return (
    <Wrapper column align justify>
      <Header />
      {props.children}
      <Footer />
    </Wrapper>
  );
}
