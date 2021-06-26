import React, { useState, useContext } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuid } from 'uuid';
import { AppContext } from '../../shared/context';
import { animacja, app1, app2, app3, main3 } from '../../shared/img';
import { Flex, StoreButtons, Section } from '../../components';
import {
  PhoneShot,
  Cover,
  CoverWrapper,
  CarouselWrapper,
  Picture,
} from './components';

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
    <>
      <CoverWrapper>
        <Cover>
          <img src={main3} />
        </Cover>
        <StoreButtons mobile={true} />
        <CarouselWrapper column>
          <Carousel
            slides={slides}
            showNavigation={false}
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
        <Flex
          align
          justify
          style={{
            maxWidth: '500px',
            margin: '16px',
          }}>
          <Picture
            src={animacja}
            alt="animation"
            style={{
              width: '90%',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 0 10px #ccc',
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
