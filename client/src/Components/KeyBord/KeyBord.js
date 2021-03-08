import React, { useEffect } from "react";
import "./keybord.css";
import Key from "./Key";
/* key, note, type, pressed */

const KeyBord = ({ keys,notesObject,setNotesObject }) => {
  useEffect(() => {
    /* {key:'a',note:'c1',pressed:false} */

    ///get a list of the white and black keys///////
    const WHITE_KEYS = keys
      .filter((key) => (key.type === "down" ? key.note : ""))
      .map((key) => key.key);
    const BLACK_KEYS = keys
      .filter((key) => (key.type === "up" ? key.note : ""))
      .map((key) => key.key);
    ////////////////////////////////////////////


    const keyDivs = document.querySelectorAll(".key");
    const whiteKeys = document.querySelectorAll(".key.white");
    const blackKeys = document.querySelectorAll(".key.black");

    keyDivs.forEach((key) => {
      key.addEventListener("click", (e) => console.log(e));
    });

    document.addEventListener("keydown", (e) => {
      if (e.repeat) return;
      const keyPressed = keys.filter((key) => (key.key === e.key ? key.note : "")).map((key) => key.note);
      //console.log(keyPressed);
      const key = e.key;
      const whiteKeyIndex = WHITE_KEYS.indexOf(key);
      const blackKeyIndex = BLACK_KEYS.indexOf(key);

      if (whiteKeyIndex > -1) {
        whiteKeys[whiteKeyIndex].classList.add("active");
        editNotes(keyPressed)
      } 
      if (blackKeyIndex > -1) blackKeys[blackKeyIndex].classList.add("active");
    });

    document.addEventListener("keyup", (e) => {
      if (e.repeat) return;
      const key = e.key;
      const whiteKeyIndex = WHITE_KEYS.indexOf(key);
      const blackKeyIndex = BLACK_KEYS.indexOf(key);

      if (whiteKeyIndex > -1) whiteKeys[whiteKeyIndex].classList.remove("active");
      if (blackKeyIndex > -1) blackKeys[blackKeyIndex].classList.remove("active");
    });
  }, []);
const noteSheet =[];
const editNotes = (note) =>{

  noteSheet.push(note[0]);

  console.log(note[0]);
  setNotesObject([...notesObject,note[0]])
  console.log(notesObject);
}

  return (
    <div className="piano">
      {keys.map((key) => (
        <Key
          theKey={key.key}
          note={key.note}
          type={key.type}
          pressed={key.pressed}
        />
      ))}
    </div>
  );
};

export default KeyBord;
