import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Main from './Components/pages/Main/Main';
import About from './Components/pages/About/About';
import Notes_songs from './Components/pages/Notes_songs/Notes_songs';
//import Notes from "./Components/Notes/NotesVexflow";1

function App() {
  

  return (
   <div>
    <Router>
      <Nav  />      
      <Switch>
      <Route path="/" exact component={Main}/> 
      <Route path="/About" component={About}/> 
      <Route path="/Notes_songs" component={Notes_songs}/> 
      </Switch>
    </Router>  
   </div>
    
  );
}

export default App;
