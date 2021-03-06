import React, { useState } from 'react';
import './App.css';
import KeyBord from './Components/KeyBord/KeyBord';
import Notes from './Components/Notes/Notes';

function App() {


  
  const [fiestNotesObject, setfiestNotesObject] = useState([
    ['a3', 'b4', 'c4', 'd4'],
    ['e4', 'f4', 'g4', 'a4'],
    ['a3', 'b4', 'c4', 'd4'],
    ['e4', 'f4', 'g4', 'a4'],
    ['a3', 'b4', 'c4', 'd4'],
    ['e4', 'f4', 'g4', 'a4'],
    ['a3', 'b4', 'c4', 'd4'],
    ['e4', 'f4', 'g4', 'a4'],
    ['a3', 'b4', 'c4', 'd4'],
    ['e4', 'f4', 'g4', 'a4'],
    ['a3', 'b4', 'c4', 'd4'],
    ['e4', 'f4', 'g4', 'a4'],
    
    ['d4', 'e4', ['g3', 2]],
  ]);
  const [secondNotesObject, setsecondNotesObject] = useState([]);
  return (
    <div className="screan">
      <div className="tavim">
        <Notes
          fiestNotesObject={fiestNotesObject}
          setfiestNotesObject={setfiestNotesObject}
          secondNotesObject={secondNotesObject}
          setsecondNotesObject={setsecondNotesObject}
        />
      </div>
      <KeyBord />
    </div>
  );
}

export default App;
