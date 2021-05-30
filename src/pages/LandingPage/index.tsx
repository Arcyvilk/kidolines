import React, { useContext } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { AppContext } from '../../shared/context';
import { app1, app2, app3, main3 } from '../../shared/img';
import { colors, fonts } from '../../shared/theme';
import { Flex } from '../../components';
import { Wrapper, Section, PhoneShot } from './components';
import Header from './Header';
import Footer from './Footer';

const Cover = styled(Flex)`
  width: 100%;
  height: 800px;
  background-color: #fff;
  background-image: url(${main3});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 0 20px 20px ${colors.secondary};
`;
const Title = styled.div`
  color: ${colors.primary};
  font-family: ${fonts.titles};
  font-size: 48px;
  margin-top: -2em;
  max-width: 550px;
  text-align: center;
  line-height: 0.8em;
`;
const StartButton = styled.button`
  font-family: ${fonts.main};
  padding: 12px 32px;
  border: 2px solid ${colors.primary};
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 18px;
  font-weight: bold;
  border-radius: 64px;
  cursor: pointer;
  margin-top: 24px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export default function LandingPage(): JSX.Element {
  const { localization } = useContext(AppContext);
  return (
    <Wrapper column>
      <Header />
      <Cover column align justify>
        <Title>{localization.header}</Title>
        <StartButton>{localization.startButton}</StartButton>
      </Cover>
      <Section>
        <Carousel
          width="350px"
          dynamicHeight
          showArrows
          showThumbs={false}
          showStatus={false}
          autoPlay
          stopOnHover
          swipeable
          emulateTouch
          infiniteLoop>
          <PhoneShot src={app1} />
          <PhoneShot src={app2} />
          <PhoneShot src={app3} />
        </Carousel>
      </Section>
      <Footer />
    </Wrapper>
  );
}
