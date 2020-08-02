import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewVideo from '../pages/NewVideo';
import NewCategory from '../pages/NewCategory';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={NewVideo} exact path="/new/video" />
      <Route component={NewCategory} exact path="/new/category" />
      <Route component={NotFound} />
    </Switch>
  );
}
