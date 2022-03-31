import React from "react";
import music from ".././music/CODING.mp3";
import background from "./../backgrounds/CODING.png";
import Draggable from "react-draggable";
import Main from "./../componenets/Main";
export default function Code() {
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  return (
    <>
      <Main
        CurrentActivity={"Coding"}
        music={music}
        background={background}
        song={"One Summer's Day"}
        next={"socials"}
        noteName={"code"}
      />
    </>
  );
}
