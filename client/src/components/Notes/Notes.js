import React from "react";
import "./notes.css";
import Myvexflow from "./Myvexflow";

const Notes = (props) => {
  
  const notesChanks = [...props.notesObject];
  const longArray = [...notesChanks];
  let shortArrays = [];
  

  for (let i = 0, len = longArray.length; i < len; i += 4) {
    console.log("Before:",shortArrays)
    shortArrays.push(longArray.slice(i, i + 4));
    console.log("After:",shortArrays)
  }


  // console.error(shortArrays)
  return (
    <>
      {console.log(shortArrays)}
      {shortArrays.map((ary, index) => (
        <Myvexflow 
        key={index}
        width="1200" 
        height="150" 
        clef="treble" 
        staves={ary} 
        />
      ))}
    </>
  );
};

export default Notes;

/* 
 vaxflow example
 useEffect(() => {
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
