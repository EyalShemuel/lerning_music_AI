import React, { useEffect } from "react";
import "./notes.css";
import Vex from "vexflow";
const VF = Vex.Flow;

const Notes = (props) => {
  const notesChanks = [...props.notesObject];

  const longArray = [...notesChanks];
  let shortArrays = [];

  for (let i = 0, len = longArray.length; i < len; i += 4) {
    shortArrays.push(longArray.slice(i, i + 4));
  }

  useEffect(() => {
    const vf = new VF.Factory({
      renderer: { elementId: "boo", width: 1600, height: 150 },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system
      .addStave({
        voices: [
          score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })),
          score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "down" })),
        ],
      })
      .addClef("treble")
      .addTimeSignature("4/4");

    vf.draw();
  }, []);

  return (
    <>
      <div class="vexbox">
        <div id="boo"></div>
      </div>
     
    </>
  );
};

export default Notes;
