import React, { useState } from "react";
import "./App.css";
import KeyBord from "./Components/KeyBord/KeyBord";
import Notes from "./Components/Notes/Notes";
//import Notes from "./Components/Notes/NotesVexflow";

function App() {
  /* 
up = have black key from right
down = DONT have black key from right 
*/

  const [notesObject, setNotesObject] = useState([]);
  const [keys, setkeys] = useState([
    { key: "a", note: "c4", type: "down" },
    { key: "q", note: "Db4", type: "up" },
    { key: "s", note: "d4", type: "down" },
    { key: "w", note: "Eb", type: "up" },
    { key: "d", note: "e4", type: "down" },
    { key: "f", note: "f4", type: "down" },
    { key: "t", note: "Gb", type: "up" },
    { key: "g", note: "g4", type: "down" },
    { key: "y", note: "Ab", type: "up" },
    { key: "h", note: "A", type: "down" },
    { key: "u", note: "Bb", type: "up" },
    { key: "j", note: "B", type: "down" },
    { key: "A", note: "C", type: "down" },
    { key: "Q", note: "Db", type: "up" },
    { key: "S", note: "D", type: "down" },
    { key: "W", note: "Eb", type: "up" },
    { key: "D", note: "E", type: "down" },
    { key: "F", note: "F", type: "down" },
    { key: "T", note: "Gb", type: "up" },
    { key: "G", note: "G", type: "down" },
    { key: "Y", note: "Ab", type: "up" },
    { key: "H", note: "A", type: "down" },
    { key: "U", note: "Bb", type: "up" },
    { key: "J", note: "B", type: "down" },
  ]);
  
  return (
    <div className="screen">
      <h1>play and see what you play</h1>
      <div className="tavim">
        <Notes
          notesObject={notesObject}
          setNotesObject={setNotesObject}
          keys={keys}
          setkeys={setkeys}
        />
      </div>
      <KeyBord
        notesObject={notesObject}
        setNotesObject={setNotesObject}
        keys={keys}
       
      />
    </div>
  );
}

export default App;
