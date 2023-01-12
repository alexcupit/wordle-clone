import Word from './Word';

function GameBoard({
  wordsGuessed,
  setWordsGuessed,
  setVictory,
  name,
  victory,
}) {
  const wordIds = [0, 1, 2, 3, 4, 5];
  return (
    <div id='gameboard'>
      {/* <p>{name}</p> */}

      {wordIds.map((wordId) => {
        return (
          <Word
            wordId={wordId}
            key={wordId}
            name={name}
            setWordsGuessed={setWordsGuessed}
            wordsGuessed={wordsGuessed}
            setVictory={setVictory}
            victory={victory}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;
