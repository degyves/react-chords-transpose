import React, { useState } from 'react';
import './App.css';
import { transposeChords } from './transpose';
import ToggleSwitch from './components/ToggleSwitch';


function App() {
  const [chords, setChords] = useState('');
  const [semitones, setSemitones] = useState(0);
  const [transposedChords, setTransposedChords] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);

  const handleTranspose = () => {
  	if(chords !== '' ){
  		try{
    		const chordArray = chords.split(/[ ,]+/).map(chord => chord.trim());
    		const semitonesNumber = parseInt(semitones, 10);
    		const result = transposeChords(chordArray, semitonesNumber);
    		setTransposedChords(result);
    		setErrorMessage('');
    	}catch(e){
    		setErrorMessage(''+e);
    		setTransposedChords('');
    		setChords('');
    	}
    }else{
    	setErrorMessage('Please add some chords to the input text');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header">
        <div className="toggle-switch-container">
          <ToggleSwitch
            label="Dark Mode"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </div>
        <h1>Chord Transposer</h1>
        <div>
          <label>
            Chords (space separated):
            <input
              type="text"
              value={chords}
              onChange={e => setChords(e.target.value)}
            />
    <div className="error-message">{errorMessage}</div>
          </label>
        </div>
        <div>
          <label>
            Semitones:
            <input
              type="number"
              value={semitones}
              onChange={e => setSemitones(e.target.value)}
            />
          </label>
        </div>

        <button onClick={handleTranspose}>Transpose</button>

        {transposedChords.length > 0 && (
          <div>
            <h2>Transposed Chords</h2>
            <table>
              <thead>
                <tr>
                  {chords.split(/[ ,]+/).map((chord, index) => (
                    <th key={index}>{chord.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {transposedChords.map((chord, index) => (
                    <td key={index}>{chord}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;

