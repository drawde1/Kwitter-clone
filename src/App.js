import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Navigation } from "./components";
import configureStore from "./redux/configureStore";

const { store, persistor } = configureStore();

const KWITTER = {
  store,
  persistor,
};
//Added Delete Profile Function
deleteProfile = (id) => {
  let profiles = this.StaticRange.profiles.filter(profile => {
    return profile.this.id !== id
  })
}
id.setState({profiles: profiles})

window.KWITTER = KWITTER;

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
componentDidMount() {
      console.log(this.props);
  this.interval = setInterval(
      () => this.props.dispatch({type:”TIME_STAMP"}),1000);

  this.props.fetchProfiles(); ---> action creators
  this.props.fetchUser(); ---> action creators
}

componentWillUnmount () {
      clearInterval(this.interval);
}


  </Provider>
  
  render() {
  <Profile deleteProfile ={this.deleteProfile}
  }
);
