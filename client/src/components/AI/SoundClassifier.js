import React from "react";
import ml5 from "ml5";

let classifier;

function SoundClassifier() {
  // const videoRef = useRef();
  

/* C:\inetpub\wwwroot\my projects\INT\fullstuck-class\projects\lerning_music_AI\client\public\model */
  /* file://public/model/model.json */
  const options = { probabilityThreshold: 0.7 };
   classifier = ml5.soundClassifier(
    'file://./model/model.json',
    options,
    modelReady
  );

  function modelReady() {
    // classify sound
    classifier.classify(gotResult);
  }
  function gotResult(error, result) {
    if (error) {
      console.log(error);
      return;
    }
    // log the result
    console.log(result);
  }
  return (
    <></>
  );
}

export default SoundClassifier;