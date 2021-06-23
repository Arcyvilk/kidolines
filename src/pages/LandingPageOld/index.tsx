import React, { useState, useContext } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuid } from 'uuid';
import { AppContext } from '../../shared/context';
import {
  app1,
  app2,
  app3,
  kid,
  mascot,
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
  Title,
  SubTitle,
  Picture,
  List,
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
      <Cover column align justify>
        <Title>{localization.header}</Title>
        <Flex row align justify>
          <StoreButtons />
        </Flex>
      </Cover>
      <Flex column align justify>
        <SubTitle>{localization.subtitle}</SubTitle>
        <Section
          gradient
          column
          style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Flex>{localization.desc1}</Flex>
          <Flex>{localization.desc2}</Flex>
        </Section>
      </Flex>
      <Flex
        row
        align
        wrap
        style={{ justifyContent: 'space-evenly', padding: '24px' }}>
        <Flex column wrap>
          <Section>
            <Picture src={mascot} alt="Our mascot" />
          </Section>
          <Section>
            <Picture src={kid} alt="Happy girl" />
          </Section>
        </Flex>
        <Flex column wrap>
          <Section style={{ marginRight: '64px' }} gradient>
            <List>{localization.keyword1}</List>
          </Section>
          <Section style={{ marginLeft: '64px' }} gradient>
            <List>{localization.keyword2}</List>
          </Section>
          <Section style={{ marginRight: '64px' }} gradient>
            <List>{localization.keyword3}</List>
          </Section>
        </Flex>
        <div style={{ width: '500px', height: '500px' }}>
          <Carousel
            slides={slides}
            showNavigation={true}
            goToSlide={activeSlide}
            offsetRadius={offsetRadius}
            animationConfig={{ tension: 120, friction: 14 }}
          />
        </div>
      </Flex>
      <Section
        column
        style={{ alignItems: 'center', justifyContent: 'center' }}>
        <p>{localization.longDesc1}</p>
        <p>{localization.longDesc2}</p>
        <p>{localization.longDesc3}</p>
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
