import React, { useEffect } from 'react';
import './keybord.css';
import Key from './Key';
import {keyPressSimulation , editNotes} from '../supporters/supporters';
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
     try {
      key.addEventListener('click', (e) =>
      {
        try {

        const depressed = key.getElementsByTagName("h1")[0].innerHTML; //finds the keybord letter that belong the keypad on the screen
        const keyPressed = keys.filter((key) => (key.key === depressed ? key.note : "")).map((key) => key.note);
        const NewSheetNote = editNotes(keyPressed,sheetNote);
        setNotesObject([...notesObject, NewSheetNote]);


        } catch (error) {
         console.log('error'); 
        }
      });
     } catch (error) {
      console.log('error'); 
     }
     
    });

    document.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      keyPressSimulation(e.key, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'add');     
    });

    document.addEventListener('keyup', (e) => {
        const noteToAdd = keys.filter((key) => (key.key === e.key ? key.note : '')).map((key) => key.note);      
        keyPressSimulation(e.key, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'remove');
        const NewSheetNote = editNotes(noteToAdd,sheetNote);
        setNotesObject([...notesObject, NewSheetNote]);
    });
   // eslint-disable-next-line 
  }, []);



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

