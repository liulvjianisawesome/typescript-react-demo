import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Playlist from '../pages/Playlist';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/discover/playlist" component={Playlist} />
    </Switch>
  </Router>
);

export default AppRouter;