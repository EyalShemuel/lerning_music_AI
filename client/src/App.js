import React, { useState } from 'react';
import './App.css';
import KeyBord from './Components/KeyBord/KeyBord';
import Notes from './Components/Notes/Notes';

function App() {

/* 
up = have black key from right
down = DONT have black key from right 
*/
  
  const [notesObject, setNotesObject] = useState([]);
  const [keys, setkeys] = useState([
    {key:'a',note:'c1',type:'up',pressed:false},
    {key:'s',note:'d1',type:'up',pressed:false},
    {key:'d',note:'e1',type:'down',pressed:false},
    {key:'f',note:'f1',type:'up',pressed:false},
    {key:'g',note:'g1',type:'up',pressed:false},
    {key:'h',note:'a2',type:'up',pressed:false},
    {key:'j',note:'b2',type:'down',pressed:false},
    {key:'a',note:'c2',type:'up',pressed:false},
    {key:'a',note:'d2',type:'up',pressed:false},
    {key:'a',note:'e2',type:'down',pressed:false},
    {key:'a',note:'f2',type:'up',pressed:false},
    {key:'a',note:'g2',type:'up',pressed:false},
    {key:'a',note:'a3',type:'up',pressed:false},
    {key:'a',note:'b3',type:'down',pressed:false},
    {key:'a',note:'c3',type:'up',pressed:false},
    {key:'a',note:'d3',type:'up',pressed:false},
    {key:'a',note:'e3',type:'down',pressed:false},
    {key:'a',note:'f3',type:'up',pressed:false},
    {key:'a',note:'g3',type:'up',pressed:false},
    {key:'a',note:'a4',type:'up',pressed:false},
    {key:'a',note:'b4',type:'down',pressed:false},
    {key:'a',note:'c4',type:'up',pressed:false},
    {key:'a',note:'d4',type:'up',pressed:false},
    {key:'a',note:'e4',type:'down',pressed:false},
    {key:'a',note:'f4',type:'up',pressed:false},
    {key:'a',note:'g4',type:'up',pressed:false},
    {key:'a',note:'a5',type:'up',pressed:false},
    {key:'a',note:'b5',type:'down',pressed:false},
    {key:'a',note:'c5',type:'up',pressed:false},
    {key:'a',note:'d5',type:'up',pressed:false},
    {key:'a',note:'e5',type:'down',pressed:false},
    {key:'a',note:'f5',type:'up',pressed:false},
    {key:'a',note:'g5',type:'up',pressed:false},
    {key:'a',note:'a6',type:'up',pressed:false},
    {key:'a',note:'b6',type:'down',pressed:false},
    
  ]);
  return (
    <div className="screan">
      <div className="tavim">
        <Notes
          notesObject={notesObject}
          setNotesObject={setNotesObject}
          keys={keys}
          setkeys={setkeys}
          
        />
      </div>
      <KeyBord 
     keys={keys}
     setkeys={setkeys}
      
      />
    </div>
  );
}

export default App;
