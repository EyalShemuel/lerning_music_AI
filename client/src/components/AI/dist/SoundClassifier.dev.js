/* import React, { useEffect } from 'react';
import ml5 from 'ml5';

const SoundClassifier = () => {
  useEffect(() => {
    const options = { probabilityThreshold: 0.7 };
    const classifier = ml5.soundClassifier(
      'SpeechCommands18w',
      options,
      classifier
    );
    const classifier = (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    // log the result
    console.log(result);
  };
  }, []);

  
  
  
  return <>
  
  </>;
};

export default SoundClassifier;
 */
"use strict";