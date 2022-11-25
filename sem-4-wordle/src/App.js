import './App.css';
import Header from './Components/Header.js';
import GameBoard from './Components/GameBoard.js';
import { useState } from 'react';
import Results from './Components/Results';

function App() {
  const [wordsGuessed, setWordsGuessed] = useState(0);
  const [victory, setVictory] = useState(false);
  const [name, setName] = useState(
    names[Math.floor(Math.random() * names.length)]
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
