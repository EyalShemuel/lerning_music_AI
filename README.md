# lerning_music_AI
a simple aplication for piano lerning with AI



function keyPressSimuletion(e, WHITE_KEYS, BLACK_KEYS, whiteKeys, blackKeys,AddOrRemoveclass) {
  const AddOrRemoveclass;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  if (AddOrRemoveclass = 'add') {
    if (whiteKeyIndex > -1)
      whiteKeys[whiteKeyIndex].classList.add('active');
    if (blackKeyIndex > -1)
      blackKeys[blackKeyIndex].classList.add('active');
  } else if (AddOrRemoveclass = 'remove') {
    if (whiteKeyIndex > -1)
      whiteKeys[whiteKeyIndex].classList.remove('active');
    if (blackKeyIndex > -1)
      blackKeys[blackKeyIndex].classList.remove('active');
  }
}
