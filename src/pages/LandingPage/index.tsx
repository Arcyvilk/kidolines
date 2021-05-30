import React, { useContext } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { AppContext } from '../../shared/context';
import {
  app1,
  app2,
  app3,
  main3,
  kid,
  mascot,
  story1,
  story2,
  story3,
  story4,
} from '../../shared/img';
import { colors, fonts } from '../../shared/theme';
import { Flex, StoreButtons } from '../../components';
import { Wrapper, PhoneShot, Section } from './components';
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

  @media (max-device-width: 900px) {
    background-size: cover;
  }
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
const Picture = styled.img`
  height: 250px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
const List = styled.div`
  width: 100%;
  font-weight: bold;
  font-family: ${fonts.titles};
  font-size: 2em;
  letter-spacing: 0.1em;
  text-align: center;
`;
const SubTitle = styled.h3`
  font-family: ${fonts.titles};
  color: ${colors.primary};
  letter-spacing: 0.1em;
  font-size: 1.7em;
`;

export default function LandingPage(): JSX.Element {
  const { localization } = useContext(AppContext);
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
