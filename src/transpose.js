const noteOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const transposeNote = (note, semitones) => {
  const index = noteOrder.indexOf(note);
  if (index === -1) {
    throw new Error(`Invalid note: ${note}`);
  }
  const newIndex = (index + semitones + noteOrder.length) % noteOrder.length;
  return noteOrder[newIndex];
};

const transposeChord = (chord, semitones) => {
  const regex = /^([A-G]#?)(.*)$/;
  const match = chord.match(regex);
  if (!match) {
    throw new Error(`Invalid chord: ${chord}`);
  }
  const [, root, suffix] = match;
  const newRoot = transposeNote(root, semitones);
  return newRoot + suffix;
};

const transposeChords = (chords, semitones) => {
  return chords.map(chord => transposeChord(chord, semitones));
};

function transpose(matrix) {
  return matrix.reduce((prev, next) => next.map((item, i) =>
    (prev[i] || []).concat(next[i])
  ), []);
}

export { transposeChords };

// Example usage:
//const chords = ['Em', 'Cmaj7', 'G', 'D#'];
/*const chords = ['Em', 'D', 'Cmaj7', 'G', 'C', 'D', 'Bm', 'B7'];
const semitones = 5;
const transposedChords = transposeChords(chords, semitones);
console.table(transpose([chords,transposedChords]));
*/

