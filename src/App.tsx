import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Main from './routes/Main';
import Archive from './routes/Archive';
import PageNotFound from './routes/PageNotFound';

import { WesternData, KoreanData } from "./variables";
import './scss/styles.scss'

const App = () => {
  return (
<Router>
      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/archive/korean">
          <Archive content={WesternData} />
        </Route>

        <Route exact path="/archive/western">
          <Archive content={KoreanData} />
        </Route>
      </Switch>
    </Router>  );
}

export default App;
