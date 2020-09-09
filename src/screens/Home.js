import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import "./Home.css";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    {/* <center><h2>Your favorite microblogging platform</h2></center> */}
    <div id="div1">
    <div id="homediv">Microblogging Platform</div>
    </div>
    <LoginFormContainer />
  </>
);
