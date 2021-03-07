import React, { useEffect } from 'react';
import './keybord.css';
import Key from './Key';

const KeyBord = ({ keys, setkeys }) => {
  useEffect(() => {
    /* {key:'a',note:'c1',pressed:false} */
    window.addEventListener('keydown', (event) => {
      
      switch (event.key) {
        case 'a':
          setkeys(
            keys.map((key) =>
              key.key === 'a' ? { ...key, pressed: 'true'  } : key
            ),
            console.log('tt')
           
          );
          break;
        case 's':
          // code block
          break;
        default:
        // code block
      }
    });
    window.addEventListener('keyup', (event) => {
      
      switch (event.key) {
        case 'a':
          setkeys(
            keys.map((key) =>
              key.key === 'a' ? { ...key, state: 'false' } : key
            ),
            document.getElementById("c1").click()
          );
          break;
        case 's':
          // code block
          break;
        default:
        // code block
      }
    });
  },[]);
 

  return (
    <ul className="piano">
     { keys.map((thekey) =>(
        <Key 
        id={thekey.id}
        thekey={thekey} />
      ))}
      
      {/*  <li id = 'c1' className="b">
            <div>c</div>
          </li>
          <li id = 'd1' className="b">
            <div>d</div>
          </li>
          <li id = 'e1' >
            <div>e</div>
          </li>
          <li id = 'f1' className="b">
            <div>f</div>
          </li>
          <li id = 'g1' className="b">
            <div>g</div>
          </li>
          <li id = 'a2' className="b">
            <div>a</div>
          </li>
          <li id = 'b2'>
            <div>b</div>
          </li>
          <li id = 'c2' className="b">
            <div>c</div>
          </li>
          <li id = 'd2' className="b">
            <div>d</div>
          </li>
          <li id = 'e2'>
            <div>e</div>
          </li>
          <li id = 'f2' className="b">
            <div>f</div>
          </li>
          <li id = 'g2' className="b">
            <div>g</div>
          </li>
          <li id = 'a3' className="b">
            <div>a</div>
          </li>
          <li id = 'b3'>
            <div>b</div>
          </li>
          <li id = 'c3' className="b">
            <div>c</div>
          </li>
          <li id = 'd3' className="b">
            <div>d</div>
          </li>
          <li id = 'e3'>
            <div>e</div>
          </li>
          <li id = 'f3' className="b">
            <div>f</div>
          </li>
          <li id = 'g3' className="b">
            <div>g</div>
          </li>
          <li id = 'a4' className="b">
            <div>a</div>
          </li>
          <li id = 'b4'>
            <div>b</div>
          </li>
          <li id = 'c4' className="b">
            <div>c</div>
          </li>
          <li id = 'd4' className="b">
            <div>d</div>
          </li>
          <li id = 'e4'>
            <div>e</div>
          </li>
          <li id = 'f4' className="b">
            <div>f</div>
          </li>
          <li id = 'g4' className="b">
            <div>g</div>
          </li>
          <li id = 'a5' className="b">
            <div>a</div>
          </li>
          <li id = 'b5'>
            <div>b</div>
          </li>
          <li id = 'c5' className="b">
            <div>c</div>
          </li>
          <li id = 'd5' className="b">
            <div>d</div>
          </li>
          <li id = 'e5'>
            <div>e</div>
          </li>
          <li id = 'f5' className="b">
            <div>f</div>
          </li>
          <li id = 'g5' className="b">
            <div>g</div>
          </li>
          <li id = 'a6' className="b">
            <div>a</div>
          </li>
          <li id = 'a6'>
            <div>b</div>
          </li> */}
    </ul>
  );
};

export default KeyBord;
