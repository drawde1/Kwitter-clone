import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import "./Home.css";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <div id="div1">
    <center><h2 id="plat">Microblogging Platform</h2></center>
    </div>
    <LoginFormContainer />
  </>
);
