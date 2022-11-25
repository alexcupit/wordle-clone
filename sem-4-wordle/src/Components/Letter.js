import { useState } from "react";

function Letter({ letterId, setLetterValues, letterColor }) {
  const [letterInput, setLetterInput] = useState("");

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
  };

  return (
    <input
      type="text"
      className={`letter ${letterColor}`}
      letter-id={letterId}
      maxLength="1"
      onKeyDown={checkLetterValidity}
      onChange={handleLetterChange}
      value={letterInput}
      required
    ></input>
  );
}

export default Letter;
