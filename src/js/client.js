import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "./vendor/bootstrap-without-jquery";
import injectTapEventPlugin from 'react-tap-event-plugin';

import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured";


injectTapEventPlugin();

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives"  component={Archives}></Route>
      <Route path="settings"  component={Settings}></Route>
    </Route>
  </Router>,
  app
);
