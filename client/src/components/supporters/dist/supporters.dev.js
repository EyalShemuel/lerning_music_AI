"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editNotes = exports.keyPressSimulation = void 0;

var editNotes = function editNotes(note, sheetNote) {
  try {
    sheetNote.push(note);
  } catch (error) {
    console.log(error);
  }

  return sheetNote;
};

exports.editNotes = editNotes;

var keyPressSimulation = function keyPressSimulation(key, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys, AddOrRemoveClass) {
  // const key = e.key;
  var whiteKeyIndex = WHITE_KEYS.indexOf(key);
  var blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (AddOrRemoveClass === 'add') {
    if (whiteKeyIndex > -1) whiteKeys[whiteKeyIndex].classList.add('active');
    if (blackKeyIndex > -1) blackKeys[blackKeyIndex].classList.add('active');
  } else if (AddOrRemoveClass === 'remove') {
    if (whiteKeyIndex > -1) whiteKeys[whiteKeyIndex].classList.remove('active');
    if (blackKeyIndex > -1) blackKeys[blackKeyIndex].classList.remove('active');
  }
};

exports.keyPressSimulation = keyPressSimulation;