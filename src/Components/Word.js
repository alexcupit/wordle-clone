import Letter from './Letter';
import { useState } from 'react';
import wordsList from '../data/words-list.js';

function Word({
  wordId,
  name,
  wordsGuessed,
  setWordsGuessed,
  setVictory,
  victory,
}) {
  const [letterValues, setLetterValues] = useState(['', '', '', '', '']);
  const [letterColors, setLetterColors] = useState([
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
  ]);

  function submitHandler(event) {
    event.preventDefault();
    if (!wordsList.includes(letterValues.join(''))) {
      return setLetterColors([
        'invalid',
        'invalid',
        'invalid',
        'invalid',
        'invalid',
      ]);
    }

    const nameArray = name.split('');
    const newLetterColors = [
      'incorrect',
      'incorrect',
      'incorrect',
      'incorrect',
      'incorrect',
    ];

    nameArray.forEach((letter, index) => {
      if (letter === letterValues[index]) {
        newLetterColors[index] = 'correct';
      } else if (letterValues.includes(letter)) {
        const indexToUpdate = letterValues.indexOf(letter);
        newLetterColors[indexToUpdate] = 'includes';
      }
    });
    setLetterColors(newLetterColors);
    setWordsGuessed((currWordsGuessed) => {
      const nextField = document.getElementById(`${wordId + 1}-0`);
      console.log(nextField);
      nextField.focus();
      return ++currWordsGuessed;
    });
    setVictory(() => {
      if (newLetterColors.every((letter) => letter === 'correct')) {
        return true;
      }
      return false;
    });
  }

  function isDisabled() {
    if (wordId === wordsGuessed && !victory) {
      return false;
    } else return true;
  }

  return (
    <form className='word' word-id={wordId} onSubmit={submitHandler}>
      <fieldset disabled={isDisabled()}>
        {letterValues.map((letter, letterId) => {
          return (
            <Letter
              key={letterId}
              letterId={letterId}
              setLetterValues={setLetterValues}
              letterColor={letterColors[letterId]}
              wordId={wordId}
            />
          );
        })}
      </fieldset>

      <button
        type='submit'
        className='submit'
        submit-id={`submit-${wordId}`}
        hidden
      >
        Submit
      </button>
    </form>
  );
}

export default Word;
