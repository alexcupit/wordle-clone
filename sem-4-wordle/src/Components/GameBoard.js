import Word from './Word';
import { useState } from 'react';

function GameBoard() {
  const [name, setName] = useState(
    names[Math.floor(Math.random() * names.length)]
  );
  function chooseName() {
    setName(names[Math.floor(Math.random() * names.length)]);
  }
  return (
    <div id='gameboard'>
      <p>{name}</p>
      <Word wordId='word1' name={name} />
      <Word wordId='word2' name={name} />
      <Word wordId='word3' name={name} />
      <Word wordId='word4' name={name} />
      <Word wordId='word5' name={name} />
      <Word wordId='word6' name={name} />
      <button
        onClick={() => {
          chooseName();
        }}
      >
        New Name
      </button>
    </div>
  );
}

export default GameBoard;

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
