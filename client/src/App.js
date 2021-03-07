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
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'up',state:false},
    {key:'a',note:'c1',type:'down',state:false},
    
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
