import React, { useEffect } from 'react';
import ml5 from 'ml5';
import { keyPressSimulation, editNotes } from '../supporters/supporters';

let classifier;
const sheetNote = [];
const options = { probabilityThreshold: 0.95 };

function SoundClassifier({ notesObject, setNotesObject, keys }) {

  useEffect(() => {

    async function setup() {
      classifier = await ml5.soundClassifier(
        'https://teachablemachine.withgoogle.com/models/YXQ-QhabY/model.json',       
        options
      );
      // Create 'label' and 'confidence' div to hold results
  
      classifier.classify(gotResult);
    }

    setup();
  
    // A function to run when we get any errors or results
    function gotResult(error, results) {      
      console.error('ther is error befor the try expretion:',error);
      try {
        if (results[0].label !== 'Background Noise') {
        // if (results[0].label === 'd4') {
            const playedNote = results[0].label;
  
            console.log(playedNote)
            const keyPressed = keys.filter((key) => ( key.note=== playedNote ? key.note : "")).map((key) => key.key); 
            console.log('the key pressed is:',keyPressed)
            // keyPressSimulation(e, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'add');
            // keyPressSimulation(e, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,'remove');
            const NewSheetNote = editNotes(playedNote, sheetNote);
            console.log(NewSheetNote);
            setNotesObject([...notesObject, NewSheetNote]);
        // }
        }
      } catch (error) {
        console.log('ther is error:',error);
      }
    }

  },[])



  return <></>;
}

export default SoundClassifier;
