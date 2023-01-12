function Results({ wordsGuessed, victory, name }) {
  function resultsMessage() {
    if (!victory && wordsGuessed === 6) {
      return `You lost! The correct answer was ${name}`;
    } else if (!victory) {
      return `You have guessed ${wordsGuessed} times and have ${
        6 - wordsGuessed
      } guesses
      remaining!`;
    } else {
      return `You won in ${wordsGuessed} guesses!`;
    }
  }

  return <section id='results'>{resultsMessage()}</section>;
}

export default Results;
