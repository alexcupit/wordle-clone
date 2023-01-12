import './App.css';
import Header from './Components/Header.js';
import GameBoard from './Components/GameBoard.js';
import { useState } from 'react';
import Results from './Components/Results';
import words from './data/words-list';

function App() {
  const [wordsGuessed, setWordsGuessed] = useState(0);
  const [victory, setVictory] = useState(false);
  // this app was initially built to feature the names of members from our seminar group, but using a valid word list. For my portfolio, the chosen word is now selected from that valid word list and names are not used to make it more accessible.
  const [name, setName] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  return (
    <div className='app'>
      <Header />
      <GameBoard
        wordsGuessed={wordsGuessed}
        setWordsGuessed={setWordsGuessed}
        setVictory={setVictory}
        name={name}
        setName={setName}
        victory={victory}
      />
      <Results
        wordsGuessed={wordsGuessed}
        victory={victory}
        name={name}
        setName={setName}
      />
    </div>
  );
}

export default App;

const names = [
  'kevin',
  'adamg',
  'alexc',
  'alexw',
  'alvov',
  'angel',
  'callu',
  'carri',
  'cyrus',
  'danja',
  'darss',
  'daver',
  'david',
  'eddyk',
  'ellam',
  'erina',
  'emily',
  'felip',
  'gjabo',
  'hadri',
  'isaac',
  'jackh',
  'julia',
  'joeva',
  'kazee',
  'liamd',
  'matts',
  'olive',
  'onesi',
  'paulr',
  'razin',
  'rosep',
  'sarah',
  'yasir',
  'yousi',
  'zakar',
];
