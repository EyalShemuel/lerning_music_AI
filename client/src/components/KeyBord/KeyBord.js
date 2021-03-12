import React, { useEffect } from 'react';
import './keybord.css';
import Key from './Key';
/* key, note, type, pressed */

const KeyBord = ({keys,notesObject,setNotesObject}) => {
  const sheetNote = [];

  useEffect(() => {
    ////set querySelectors ////////////
    const keyDivs = document.querySelectorAll('.key');
    const whiteKeys = document.querySelectorAll('.key.white');
    const blackKeys = document.querySelectorAll('.key.black');
    ////end set querySelectors///////////

    /* ************************************** */

    ///get a list of the white and black keys///////
    const WHITE_KEYS = keys
      .filter((key) => (key.type === 'down' ? key.note : ''))
      .map((key) => key.key);
    const BLACK_KEYS = keys
      .filter((key) => (key.type === 'up' ? key.note : ''))
      .map((key) => key.key);
    ////////////////////////////////////////////

      /* ************************************** */



    keyDivs.forEach((key) => {
      key.addEventListener('click', (e) => console.log(e));
    });

    document.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      keyPressSimuletion(e, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'add');     
    });

    document.addEventListener('keyup', (e) => {
      const noteToAdd = keys
        .filter((key) => (key.key === e.key ? key.note : ''))
        .map((key) => key.note);
      
        keyPressSimuletion(e, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'remove');
        editNotes(noteToAdd,sheetNote);
    });
   // eslint-disable-next-line 
  }, []);

 
  
  console.log(notesObject);


  return (
    <div className="piano">
      {keys.map((key,index) => (
        <Key   
          key={index}    
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

const editNotes = (note,sheetNote) => {
  sheetNote.push(note[0]);
  //console.log(note[0]);
  setNotesObject([...notesObject, sheetNote]);
};

const keyPressSimuletion = (e, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,AddOrRemoveclass) => {
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  if (AddOrRemoveclass = 'add') {
    if (whiteKeyIndex > -1)
      whiteKeys[whiteKeyIndex].classList.add('active');
    if (blackKeyIndex > -1)
      blackKeys[blackKeyIndex].classList.add('active');
  } else if (AddOrRemoveclass = 'remove') {
    if (whiteKeyIndex > -1)
      whiteKeys[whiteKeyIndex].classList.remove('active');
    if (blackKeyIndex > -1)
      blackKeys[blackKeyIndex].classList.remove('active');
  }
}

