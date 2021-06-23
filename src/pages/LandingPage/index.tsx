import React, { useState, useContext } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuid } from 'uuid';
import { AppContext } from '../../shared/context';
import {
  app1,
  app2,
  app3,
  story1,
  story2,
  story3,
  story4,
} from '../../shared/img';
import { Flex, StoreButtons } from '../../components';
import {
  Wrapper,
  PhoneShot,
  Section,
  Cover,
  CoverWrapper,
  CarouselWrapper,
  Title,
  Picture,
} from './components';
import Header from './Header';
import Footer from './Footer';

export default function LandingPage(): JSX.Element {
  const { localization } = useContext(AppContext);
  const [activeSlide, setActiveSlide] = useState(0);
  const [offsetRadius] = useState(3);
  const slides = [
    {
      key: uuid(),
      content: <PhoneShot src={app1} alt="screenshot1" />,
    },
    {
      key: uuid(),
      content: <PhoneShot src={app2} alt="screenshot2" />,
    },
    {
      key: uuid(),
      content: <PhoneShot src={app3} alt="screenshot3" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setActiveSlide(index) };
  });

  return (
    <Wrapper column>
      <Header />
      <CoverWrapper>
        <Cover column justify align>
          <Title>{localization.header}</Title>
          <Flex row align justify></Flex>
        </Cover>
        <StoreButtons mobile={true} />
        <CarouselWrapper column>
          <Carousel
            slides={slides}
            showNavigation={true}
            goToSlide={activeSlide}
            offsetRadius={offsetRadius}
            animationConfig={{ tension: 120, friction: 14 }}
          />
        </CarouselWrapper>
      </CoverWrapper>
      <StoreButtons mobile={false} />
      <Section
        column
        style={{ alignItems: 'center', justifyContent: 'center' }}>
        <p>{localization.longDesc1}</p>
      </Section>
      <Flex row justify align wrap>
        <Section>
          <Picture src={story1} alt="Example story picture 1" />
        </Section>
        <Section>
          <Picture src={story2} alt="Example story picture 2" />
        </Section>
        <Section>
          <Picture src={story3} alt="Example story picture 3" />
        </Section>
        <Section>
          <Picture src={story4} alt="Example story picture 4" />
        </Section>
      </Flex>
      <Footer />
    </Wrapper>
  );
}
