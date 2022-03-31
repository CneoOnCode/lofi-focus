import { useState, useEffect } from "react";
import background from "./../backgrounds/CODING.png";
import ReactHowler from "react-howler";
import music from "./../music/IDLE.mp3";
import Draggable from "react-draggable";
export default function Main(props) {
  const [play, setPlay] = useState(false);
  const [notes, setNotes] = useState("");
  const [currentUnsaved, setCurrentUnsaved] = useState("");
  const isPlaying = () => {
    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };
  useEffect(() => {
    var k = localStorage.getItem(props.noteName);
    setNotes(k);
  }, []);

  const current = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div
      className="backgroundIdle"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className="IdleContent">
        <ReactHowler src={props.music} playing={play} loop={true} />
        <h0>
          Your <div className="idleText">{props.CurrentActivity}</div>
        </h0>
        <h3>{date}</h3>
        <br></br>
        <h5>Song: {props.song}</h5>

        <div>
          <button onClick={isPlaying}>Play/Pause</button>
        </div>
        <a href={"/" + props.next}>{props.next}</a>
      </div>
      <Draggable defaultPosition={{ x: 600, y: 25 }}>
        <div className="background">
          <br></br>
          <textarea
            type="text"
            onChange={(event) => setCurrentUnsaved(event.target.value)}
          ></textarea>
          <button
            onClick={() => {
              localStorage.setItem(props.noteName, currentUnsaved);
              var newNotes = localStorage.getItem(props.notesName);
              setNotes(currentUnsaved);
            }}
          >
            Save
          </button>
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: -750, y: 25 }}>
        <div className="background">
          <h5>{notes}</h5>
        </div>
      </Draggable>
    </div>
  );
}
