import React from 'react';
import {
  BGImg1,
  BGImg2,
  BGImg3,
  BGImg4,
  TextSection,
  Caption,
} from './components';
import { Gradient, Flex } from '../../components';
import kidoguy from '../../shared/img/dudebro.jpg';

export default function LandingPage(): JSX.Element {
  return (
    <div style={{ height: '100%', margin: 0 }}>
      <Gradient>KIDOLINES</Gradient>
      <BGImg1 />

      <TextSection>
        <h3 style={{ textAlign: 'center' }}>Kidolines</h3>
        <Flex row>
          <img src={kidoguy} alt="kidolines" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisis felis sit amet ligula imperdiet, ut egestas tellus
            consequat. Ut ut nisi sit amet nulla aliquet suscipit vestibulum at
            augue. Praesent placerat magna eu facilisis interdum. Donec
            vestibulum sem eget turpis maximus, a commodo ex laoreet. In ac nisi
            ultricies, consequat diam eget, imperdiet enim. Praesent sagittis
            vitae ipsum in laoreet. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Cras sed tincidunt quam. Nullam vulputate id
            nisl quis semper. Nunc ipsum lacus, pretium a pulvinar eget, egestas
            ut metus. Quisque ultricies ligula in fermentum mattis. Donec
            vestibulum non nunc at convallis. Curabitur et pellentesque magna.
            Ut eget sodales nisl. Etiam ac tellus varius, laoreet lectus at,
            gravida orci.
          </p>
        </Flex>
      </TextSection>

      <BGImg2>
        <Caption>
          <span>Lorem Ipsum</span>
        </Caption>
      </BGImg2>

      <div style={{ position: 'relative' }}>
        <TextSection>
          <p>
            Nullam eget fermentum nisl, in egestas dolor. Phasellus varius,
            tellus sed gravida facilisis, augue ex placerat nulla, vitae tempus
            odio nisl nec augue. In neque sapien, malesuada in sem id, rutrum
            porttitor est. Sed nec elit eu eros imperdiet pulvinar. Etiam
            finibus dui nec sagittis mattis.
          </p>
        </TextSection>
      </div>

      <BGImg3>
        <Caption>
          <span>TEST</span>
        </Caption>
      </BGImg3>

      <div style={{ position: 'relative' }}>
        <TextSection>
          <p>
            Nullam nisi tellus, gravida sed pulvinar nec, dapibus id velit.
            Pellentesque feugiat mauris quis vestibulum vestibulum. Proin at
            arcu cursus, aliquam eros at, egestas tortor. Suspendisse pharetra
            lectus a tellus vulputate, nec fermentum metus sagittis. Praesent
            euismod tincidunt varius. Maecenas vel lorem convallis, accumsan mi
            auctor, aliquet urna. Phasellus nec lacinia enim. Pellentesque
            facilisis sit amet quam id gravida. Suspendisse venenatis pretium
            libero, ut faucibus orci porttitor eu. Aliquam tempor dignissim
            porta.
          </p>
        </TextSection>
      </div>

      <BGImg4>
        <Caption>
          <span>TEST</span>
        </Caption>
      </BGImg4>

      <div style={{ position: 'relative' }}>
        <TextSection>
          <p>
            In in gravida risus. Vivamus libero urna, posuere ac iaculis eu,
            vehicula ac orci. Ut diam turpis, imperdiet et nulla nec, eleifend
            pretium tortor. Curabitur in tortor et mauris tempor varius.
            Curabitur facilisis lorem ut ligula consequat molestie. Fusce mi
            quam, consequat eu lectus vitae, tincidunt pellentesque mauris.
          </p>
        </TextSection>
      </div>

      <Gradient style={{ padding: '40px' }}>
        <Flex row>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>Home</li>
              <li>Page</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>+00 111 222 333</li>
              <li>email@email.com</li>
              <li>kidolines.app</li>
              <li>Street 2, City, Some Country</li>
            </ul>
          </div>
        </Flex>
      </Gradient>
    </div>
  );
}
