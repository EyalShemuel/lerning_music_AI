import React from "react";
/* {key:'a',note:'c1',pressed:false} */
const Key = ({id, theKey, note, type }) => {

 
  return (
    /* "key white" */

    <div
    id={Math.floor(Math.random() * 10000)}
      data-note={note}
      className={type === "up" ? "key black" : "key white"}
    >
      <h1>{theKey}</h1>
     
    </div>
    
  );
};

export default Key;

