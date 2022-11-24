import Letter from "./Letter";
import { useState } from "react";

function Word({ wordId, name }) {
  const [letterValues, setLetterValues] = useState([
    {
      letterId: 0,
      letterValue: "",
    },
    {
      letterId: 1,
      letterValue: "",
    },
    {
      letterId: 2,
      letterValue: "",
    },
    {
      letterId: 3,
      letterValue: "",
    },
    {
      letterId: 4,
      letterValue: "",
    },
  ]);

  function submitHandler(event) {
    setLetterValues((currentLetterValues) => {
      const newLetterValues = currentLetterValues.map((letter) => {
        const newLetter = { ...letter };
        newLetter.letterValue = event.target[newLetter.letterId].value;
        return newLetter;
      });
      console.log(newLetterValues);
      return newLetterValues;
    });
  }

  return (
    <form
      action="/"
      className="word"
      word-id={wordId}
      onSubmit={(event) => {
        event.preventDefault();
        return submitHandler(event);
      }}
    >
      {letterValues.map(({ letterId, letterValue }) => {
        return (
          <Letter
            key={letterId}
            letterId={letterId}
            letterValue={letterValue}
            name={name}
          />
        );
      })}

      {/* <Submit submitId={`submit-${wordId}`} /> */}
      <button type="submit" className="submit" submit-id={`submit-${wordId}`}>
        Submit
      </button>
    </form>
  );
}

export default Word;
