import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import WebFont from 'webfontloader';
import ContentWrapper from '../ContentWrapper';
import LandingPage from '../LandingPage';
import TOSPage from '../TOSPage';
import PrivacyPage from '../PrivacyPage';

export default function App(): JSX.Element {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Mountains of Christmas', 'Raleway', 'Luckiest Guy'],
      },
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/kidolines">
          <ContentWrapper>
            <LandingPage />
          </ContentWrapper>
        </Route>
        <Route exact path="/kidolines/tos">
          <ContentWrapper>
            <TOSPage />
          </ContentWrapper>
        </Route>
        <Route exact path="/kidolines/privacy">
          <ContentWrapper>
            <PrivacyPage />
          </ContentWrapper>
        </Route>
        <Route>
          <Redirect to="/kidolines" />
        </Route>
      </Switch>
    </Router>
  );
}
