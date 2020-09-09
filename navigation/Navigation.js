import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {
  HomeScreen,
  ProfileScreen,
  NotFoundScreen,
  Feed,
} from "../src/screens";
import { ConnectedRoute } from "../src/components/connected-route/ConnectedRoute";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path='/'
        redirectIfAuthenticated
        component={HomeScreen}
      />

      <ConnectedRoute exact isProtected path='/feed' component={Feed} />
      <ConnectedRoute
        exact
        isProtected
        path='/profile/:username'
        component={ProfileScreen}
      />

      <ConnectedRoute path='*' component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
