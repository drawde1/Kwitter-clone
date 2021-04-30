import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen, Feed, UsersList } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";


export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/Kwitter-clone/"
        redirectIfAuthenticated
        component={HomeScreen}
      />

      <ConnectedRoute
        exact
        isProtected
        path="/feed"
        component={Feed}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/users"
        component={UsersList}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profile/:username"
        component={ProfileScreen}
      />

      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
