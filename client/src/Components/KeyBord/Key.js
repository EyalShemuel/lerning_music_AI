import React from "react";
/* {key:'a',note:'c1',pressed:false} */
const Key = ({ theKey, note, type }) => {

 
  return (
    /* "key white" */

    <div
      id={theKey}
      data-note={note}
      className={type === "up" ? "key black" : "key white"}
    >
      <h1>{theKey}</h1>
     
    </div>
    
  );
};

export default Key;

