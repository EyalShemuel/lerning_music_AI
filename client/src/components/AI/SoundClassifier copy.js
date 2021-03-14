import React from "react";
import ml5 from "ml5";
import {keyPressSimulation , editNotes} from '../supporters/supporters';

let classifier;

function SoundClassifier({notesObject,setNotesObject}) {
  // const videoRef = useRef();
  

 const sheetNote = [];

  const options = { probabilityThreshold: 1 };
  
   classifier = ml5.soundClassifier(
    'https://teachablemachine.withgoogle.com/models/OJNyP9_LH/model.json',
    options,
    modelReady
  );

  function modelReady() {
    // classify sound
    classifier.classify(gotResult);
  }

  function gotResult(error, result) {
    if (error) {
      console.log(error);
      return;
    }
    // log the result
    if (result[0].label !== "Background Noise"){
      //  listen = [...listen,result[0].label]
      //  setNotesObject([...notesObject, listen]);
if (result[0].label === "d4"){
  const playedNote = result[0].label;

  // keyPressSimulation(e, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'add');
  console.log(playedNote)
 
  // keyPressSimulation(e, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'remove');
   const NewSheetNote = editNotes(playedNote,sheetNote);
   console.log(NewSheetNote)
   setNotesObject([...notesObject, NewSheetNote]);
}
     
    }
   
  }
  return (
    <></>
  );
}

export default SoundClassifier;