import Letter from './Letter';
import Submit from './Submit';
import { useState } from 'react';

function Word({ wordId, name }) {
  const [letterChecks, setLetterChecks] = useState([
    {
      letterId: 'letter1',
      letterState: 'blank',
    },
    {
      letterId: 'letter2',
      letterState: 'blank',
    },
    {
      letterId: 'letter3',
      letterState: 'blank',
    },
    {
      letterId: 'letter4',
      letterState: 'blank',
    },
    {
      letterId: 'letter5',
      letterState: 'blank',
    },
  ]);

  function submitHandler(event) {
    console.log(event);
  }

  return (
    <form
      action='/'
      className='word'
      word-id={wordId}
      onSubmit={(event) => {
        submitHandler(event);
        event.preventDefault();
      }}
    >
      {letterChecks.map((letterCheck) => {
        return (
          <Letter
            key={letterCheck.letterId}
            letter-id={`${wordId}-${letterCheck.letterId}`}
            letter-state={letterCheck.letterState}
          />
        );
      })}

      {/* <Submit submitId={`submit-${wordId}`} /> */}
      <button type='submit' className='submit' submit-id={`submit-${wordId}`}>
        Submit
      </button>
    </form>
  );
}

export default Word;
