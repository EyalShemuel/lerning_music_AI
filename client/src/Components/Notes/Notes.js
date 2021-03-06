import React, {useEffect } from "react";
import "./notes.css";
import Vex from 'vexflow';
import { Score } from './react-vexflow'
 const VF = Vex.Flow;




const Notes = (props) => {
 
  
  
 /*  useEffect(() => {
    const vf = new VF.Factory({
      renderer: {elementId: 'boo', width: 1600, height: 200}
    });
    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'}))
        score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
        
      ]
    }).addClef('treble').addTimeSignature('4/4');
  
    vf.draw()
  
  },[]);
   */
  
  
  return (

  <>
   <Score
     width='1200'
     height='300'
     clef = 'treble'
     staves={[
      ['g3', 'd4', 'e4', 'd4'],
    ['a4', 'd4', 'e4', 'd4'],
    ['a4', 'd4', 'e4', 'd4'],
    ['a4', 'd4', 'e4', 'd4'],
    ['a4', 'd4', 'e4', 'd4'],
    ['a4', 'd4', 'e4', 'd4'],
    ['a4', 'a4', 'b4', 'a4'],
    ['d4', 'e4', ['g3', 2]],
     ]}
     
   />

    
  </>
    
    

  );
};

export default Notes;
