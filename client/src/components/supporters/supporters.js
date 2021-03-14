
  const editNotes = (note,sheetNote) => {
    try {
      sheetNote.push(note);
    } catch (error) {
      console.log(error);
    }  
    return sheetNote;
  };
  
  const keyPressSimulation = (key, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,AddOrRemoveClass) => {
   // const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    if (AddOrRemoveClass === 'add') {
        if (whiteKeyIndex > -1) whiteKeys[whiteKeyIndex].classList.add('active');
      if (blackKeyIndex > -1) blackKeys[blackKeyIndex].classList.add('active');
    } else if (AddOrRemoveClass === 'remove') {
      if (whiteKeyIndex > -1) whiteKeys[whiteKeyIndex].classList.remove('active');
      if (blackKeyIndex > -1) blackKeys[blackKeyIndex].classList.remove('active');
    }
  }
export {keyPressSimulation , editNotes}

 
