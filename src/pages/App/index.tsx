import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import WebFont from 'webfontloader';
import LandingPage from '../LandingPage';

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
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
