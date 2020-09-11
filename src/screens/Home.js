import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import "./Home.css";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <center>
      <h2>Relationship Microblogging Platform</h2>
      // @ts-ignore
    </center>
    <div id='div1'>
      <div id='homediv'>Kwitt Da Good! Da Bad! Da Ugly!</div>
    </div>
    // @ts-ignore
    <LoginFormContainer />
  </>
);
