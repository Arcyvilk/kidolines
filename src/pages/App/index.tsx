import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import WebFont from 'webfontloader';
import styled from 'styled-components';
import LandingPage from '../LandingPage';

const MainWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export default function App(): JSX.Element {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Mountains of Christmas', 'Raleway'],
      },
    });
  }, []);

  return (
    <Router>
      <Switch>
        <MainWrapper>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </MainWrapper>
      </Switch>
    </Router>
  );
}
