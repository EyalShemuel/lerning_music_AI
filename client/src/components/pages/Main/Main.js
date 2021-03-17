import React, { useState } from 'react';

import KeyBord from './KeyBord/KeyBord';
import Notes from './Notes/Notes';
import SoundClassifier from './AI/SoundClassifier';
//import Notes from "./Components/Notes/NotesVexflow";1

function Main() {
  const [notesObject, setNotesObject] = useState([]);
  const [keys, setkeys] = useState([
    { key: 'a', note: 'c4', type: 'down' },
    { key: 'q', note: 'db4', type: 'up' },
    { key: 's', note: 'd4', type: 'down' },
    { key: 'w', note: 'Eb', type: 'up' },
    { key: 'd', note: 'e4', type: 'down' },
    { key: 'f', note: 'f4', type: 'down' },
    { key: 't', note: 'Gb', type: 'up' },
    { key: 'g', note: 'g4', type: 'down' },
    { key: 'y', note: 'Ab', type: 'up' },
    { key: 'h', note: 'a5', type: 'down' },
    { key: 'u', note: 'Bb', type: 'up' },
    { key: 'j', note: 'b5', type: 'down' },
    { key: 'A', note: 'c5', type: 'down' },
    { key: 'Q', note: 'db', type: 'up' },
    { key: 'S', note: 'd5', type: 'down' },
    { key: 'W', note: 'eb', type: 'up' },
    { key: 'D', note: 'e5', type: 'down' },
    { key: 'F', note: 'f5', type: 'down' },
    { key: 'T', note: 'gb', type: 'up' },
    { key: 'G', note: 'g5', type: 'down' },
    { key: 'Y', note: 'ab', type: 'up' },
    { key: 'H', note: 'a6', type: 'down' },
    { key: 'U', note: 'bb', type: 'up' },
    { key: 'J', note: 'b6', type: 'down' },
  ]);

  return (
    <div className="screen">
      <h1>play and see what you play</h1>
      <div className="tavim">
        <Notes
          keys={keys}
          setkeys={setkeys}
          notesObject={notesObject}
          setNotesObject={setNotesObject}
        />
      </div>
      <SoundClassifier
      keys={keys}
      notesObject={notesObject}
      setNotesObject={setNotesObject}
      />
      <KeyBord
        keys={keys}
        notesObject={notesObject}
        setNotesObject={setNotesObject}
      />
     
    </div>
  );
}

export default Main;
