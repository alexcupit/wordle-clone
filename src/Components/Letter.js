import { useState } from 'react';

function Letter({ letterId, setLetterValues, letterColor, wordId }) {
  const [letterInput, setLetterInput] = useState('');

  const checkLetterValidity = (event) => {
    if (!/[a-zA-Z]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleLetterChange = (event) => {
    const newLetter = event.target.value.toLowerCase();
    setLetterInput(newLetter);
    setLetterValues((currentLetterValues) => {
      const newLetterValues = [...currentLetterValues];
      newLetterValues[letterId] = newLetter;
      return newLetterValues;
    });
    const nextField = document.getElementById(`${wordId}-${letterId + 1}`);
    const prevField = document.getElementById(`${wordId}-${letterId - 1}`);
    if (event.target.value.length === 1) {
      nextField.focus();
    }
    if (event.target.value.length === 0) {
      prevField.focus();
    }
  };

  return (
    <input
      type='text'
      className={`letter ${letterColor}`}
      letter-id={letterId}
      maxLength='1'
      id={`${wordId}-${letterId}`}
      onKeyDown={checkLetterValidity}
      onChange={handleLetterChange}
      value={letterInput}
      required
    ></input>
  );
}

export default Letter;
