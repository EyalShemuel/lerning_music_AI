import React, {useEffect } from "react";
import "./notes.css";
import Vex from 'vexflow';
 const VF = Vex.Flow;




const Notes = (props) => {
 
  
  
  useEffect(() => {
    const vf = new VF.Factory({
      renderer: {elementId: 'boo', width: 1600, height: 200}
    });
    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
        score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
      ]
    }).addClef('treble').addTimeSignature('4/4');
  
    vf.draw()
  
  },[]);
  
  
  
  return (

  
     <div id="boo"></div>
 

  );
};

export default Notes;
