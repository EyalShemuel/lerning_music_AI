import React, { useEffect } from 'react';
import './keybord.css';
import Key from './Key';
/* key, note, type, pressed */

const KeyBord = (props) => {
  useEffect(() => {
    /* {key:'a',note:'c1',pressed:false} */

    ///get a list of the white and black keys///////
    const WHITE_KEYS = props.keys
      .filter((key) => (key.type === 'down' ? key.note : ''))
      .map((key) => key.key);
    const BLACK_KEYS = props.keys
      .filter((key) => (key.type === 'up' ? key.note : ''))
      .map((key) => key.key);
    ////////////////////////////////////////////

    const keyDivs = document.querySelectorAll('.key');
    const whiteKeys = document.querySelectorAll('.key.white');
    const blackKeys = document.querySelectorAll('.key.black');

    keyDivs.forEach((key) => {
      key.addEventListener('click', (e) => console.log(e));
    });

    document.addEventListener('keydown', (e) => {
      if (e.repeat) return;

      //console.log(keyPressed);
      const key = e.key;
      const whiteKeyIndex = WHITE_KEYS.indexOf(key);
      const blackKeyIndex = BLACK_KEYS.indexOf(key);

      if (whiteKeyIndex > -1) {
        whiteKeys[whiteKeyIndex].classList.add('active');
      }
      if (blackKeyIndex > -1) blackKeys[blackKeyIndex].classList.add('active');
    });

    document.addEventListener('keyup', (e) => {
      const keyPressed = props.keys
        .filter((key) => (key.key === e.key ? key.note : ''))
        .map((key) => key.note);
      if (e.repeat) return;
      const key = e.key;
      const whiteKeyIndex = WHITE_KEYS.indexOf(key);
      const blackKeyIndex = BLACK_KEYS.indexOf(key);

      if (whiteKeyIndex > -1) {
        whiteKeys[whiteKeyIndex].classList.remove('active');        
      }
      if (blackKeyIndex > -1)
        blackKeys[blackKeyIndex].classList.remove('active');
        editNotes(keyPressed);
    });
   // eslint-disable-next-line 
  }, [props.keys]);

  const sheetNote = [];
  const editNotes = (note) => {
    sheetNote.push(note[0]);

    console.log(note[0]);
    props.setNotesObject([...props.notesObject, sheetNote]);
  };
  console.log(props.notesObject);
  return (
    <div className="piano">
      {props.keys.map((key) => (
        <Key
        id={Math.floor(Math.random() * 10000)}
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
