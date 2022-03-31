import React, { useState } from "react";
import music from "./music/IDLE.mp3";
import "./styles/App.css";
import background from "./backgrounds/IDLE.png";
import Main from "./componenets/Main";
function App() {
  return (
    <Main
      music={music}
      CurrentActivity={"Idle"}
      background={background}
      song={"Waking Up Slowly"}
      next={"coding"}
      noteName={"thoughts"}
    />
  );
}

export default App;
