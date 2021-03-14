import React, { useEffect } from 'react';
import ml5 from 'ml5';
// eslint-disable-next-line
import { keyPressSimulation, editNotes } from '../supporters/supporters';
/* todo */
/* https://www.npmjs.com/package/opensheetmusicdisplay */

let classifier;
const sheetNote = [];
const options = { probabilityThreshold: 0.95 };
const url = 'https://teachablemachine.withgoogle.com/models/OJNyP9_LH/';
// const url = 'https://teachablemachine.withgoogle.com/models/YXQ-QhabY/';

function SoundClassifier({ notesObject, setNotesObject, keys }) {

  useEffect(() => {
      ////set querySelectors ////////////    
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

    async function setup() {
      classifier = await ml5.soundClassifier(
        `${url}model.json`,       
        options);
      // Create 'label' and 'confidence' div to hold results      
      classifier.classify(gotResult);
    }

    setup();
  
    // A function to run when we get any errors or results
    function gotResult(error, results) {  
      if (error != null) console.error('ther is error befor the try expretion:',error);
      try {
        if (results[0].label !== 'Background Noise') {
        if ((results[0].label === 'c4') || (results[0].label === 'd4')|| (results[0].label === 'e4')|| (results[0].label === 'f4')|| (results[0].label === 'g4')|| (results[0].label === 'a5')|| (results[0].label === 'b5')) {
            const playedNote = results[0].label;
  
            console.log(playedNote)
            const keyPressed = keys.filter((key) => ( key.note=== playedNote ? key.note : "")).map((key) => key.key); 
            console.log('the key pressed is:',keyPressed)
             keyPressSimulation(keyPressed[0], WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'add');
             setTimeout(()=>{
              keyPressSimulation(keyPressed[0], WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'remove');
             },500)
            
            const NewSheetNote = editNotes(playedNote, sheetNote);
            console.log(NewSheetNote);
            setNotesObject([...notesObject, NewSheetNote]);
        }
        }
      } catch (error) {
        console.log('ther is error:',error);
      }
    }
// eslint-disable-next-line
  },[])



  return <></>;
}

export default SoundClassifier;
