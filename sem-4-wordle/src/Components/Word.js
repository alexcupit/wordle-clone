import Letter from "./Letter";
import { useState } from "react";

function Word({ wordId, name }) {
  const [letterValues, setLetterValues] = useState(["", "", "", "", ""]);
  const [letterColors, setLetterColors] = useState([
    "blank",
    "blank",
    "blank",
    "blank",
    "blank",
  ]);

  function submitHandler(event) {
    event.preventDefault();
    const nameArray = name.split("");
    const newLetterColors = [
      "incorrect",
      "incorrect",
      "incorrect",
      "incorrect",
      "incorrect",
    ];

    nameArray.forEach((letter, index) => {
      if (letter === letterValues[index]) {
        newLetterColors[index] = "correct";
      } else if (letterValues.includes(letter)) {
        const indexToUpdate = letterValues.indexOf(letter);
        newLetterColors[indexToUpdate] = "includes";
      }
    });
    setLetterColors(newLetterColors);
  }

  return (
    <form action="/" className="word" word-id={wordId} onSubmit={submitHandler}>
      {letterValues.map((letter, letterId) => {
        return (
          <Letter
            key={letterId}
            letterId={letterId}
            setLetterValues={setLetterValues}
            letterColor={letterColors[letterId]}
          />
        );
      })}

      <button type="submit" className="submit" submit-id={`submit-${wordId}`}>
        Submit
      </button>
    </form>
  );
}

export default Word;
