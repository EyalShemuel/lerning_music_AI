import React, { useEffect } from "react";
import ml5 from "ml5";

const options = { probabilityThreshold: 0.7 };




const SoundClassifier = () => {
  
  useEffect(() => {
    const classifier = ml5.soundClassifier(
      "SpeechCommands18w",
      options,
      (error, result)=>{
         
          if (error) {
            console.log(error);
            return;
          }
          // log the result
          console.log(result);
        
      }
    );

   
    classifier();
  }, []);


  


  return <div></div>;
};

export default SoundClassifier;
