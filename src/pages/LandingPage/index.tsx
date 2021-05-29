import React from 'react';
import { BGImg1, BGImg2, BGImg3, TextSection } from './components';

export default function LandingPage(): JSX.Element {
  return (
    <div style={{ height: '100%', margin: 0 }}>
      <BGImg1 />

      <TextSection>
        <h3 style={{ textAlign: 'center' }}>Parallax Demo</h3>
        <p>
          Parallax scrolling is a web site trend where the background content is
          moved at a different speed than the foreground content while
          scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis
          nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit
          pellentesque a, magna turpis est sapien duis blandit dignissim.
          Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum
          consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget
          et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus
          vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar,
          in in neque risus odio. Accumsan fringilla vulputate at quibusdam
          sociis eleifend, aenean maecenas vulputate, non id vehicula lorem
          mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel,
          non sit platea sit, maecenas ante augue etiam maecenas, porta
          porttitor placerat leo.
        </p>
      </TextSection>

      <BGImg2>
        <div>ANOTHER TEST</div>
      </BGImg2>

      <div style={{ position: 'relative' }}>
        <TextSection>
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </TextSection>
      </div>

      <BGImg3>
        <div className="caption">TEST</div>
      </BGImg3>

      <div style={{ position: 'relative' }}>
        <TextSection>
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </TextSection>
      </div>

      <BGImg1>
        <div className="caption">
          <span className="border">COOL!</span>
        </div>
      </BGImg1>
    </div>
  );
}
