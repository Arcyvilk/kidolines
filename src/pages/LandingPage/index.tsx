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
  color: ${colors.primary};
  font-weight: bold;
  font-family: ${fonts.titles};
  font-size: 2em;
  letter-spacing: 0.1em;
  text-align: center;
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
      <Flex
        row
        align
        style={{ justifyContent: 'space-evenly', padding: '24px' }}>
        <Flex column>
          <Section>
            <Picture src={mascot} alt="Our mascot" />
          </Section>
          <Section>
            <Picture src={kid} alt="Happy girl" />
          </Section>
        </Flex>
        <Flex column>
          <Section style={{ marginRight: '64px' }}>
            <List>over 50 traditional fables</List>
          </Section>
          <Section style={{ marginLeft: '64px' }}>
            <List>beautiful artworks</List>
          </Section>
          <Section style={{ marginRight: '64px' }}>
            <List>immersive voice acting</List>
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
      <Section column justify align>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
          dui mauris. Proin vehicula at dui ac facilisis. Sed feugiat mi at
          libero euismod, luctus euismod nisl placerat. In consequat quis tellus
          eget placerat.
        </p>
        <p>Nam vitae tellus dapibus, consectetur nisi ut, placerat neque</p>
        <p>
          Quisque id ultrices ligula. Quisque ut mauris malesuada, dictum nisi
          at, commodo odio. Maecenas dictum erat a arcu mollis vehicula. Etiam
          finibus est ac facilisis vulputate. Duis suscipit enim at massa
          sollicitudin pharetra.
        </p>
      </Section>
      <Flex row justify align>
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
