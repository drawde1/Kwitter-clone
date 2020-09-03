import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
<<<<<<< HEAD
import { HomeScreen, ProfileScreen, NotFoundScreen, UsersScreen, MessageScreen } from "../../screens";
=======
import { HomeScreen, ProfileScreen, NotFoundScreen, Feed } from "../../screens";
>>>>>>> 4e6d2655debf5a91aefef16e9c57017d1cf53a6a
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
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
        path="/profiles/:username"
        component={ProfileScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/messagefeed"
        component={MessageScreen}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
