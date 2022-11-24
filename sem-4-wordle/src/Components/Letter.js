function Letter({ letterId, letterValue, name }) {
  let letterState = "blank";

  function letterCheck(letterId, letterValue) {
    if (letterValue === "") {
      return (letterState = "blank");
    }
    if (name[letterId] === letterValue.toLowerCase()) {
      letterState = "correct";
    } else if (name.includes(letterValue.toLowerCase())) {
      letterState = "includes";
    } else {
      letterState = "incorrect";
    }
    return letterState;
  }

  return (
    <input
      type="text"
      className={`letter ${letterCheck(letterId, letterValue)}`}
      letter-id={letterId}
      maxLength="1"
      letter-value={letterValue}
      onKeyDown={(e) => {
        if (!/[a-zA-Z]/.test(e.key)) {
          e.preventDefault();
        }
      }}
      required
      //   onKeyPress={(event) => {
      //     return (
      //       (event.charCode >= 65 && event.charCode <= 90) ||
      //       (event.charCode >= 97 && event.charCode <= 122)
      //     );
      //   }}
    ></input>
  );
}

export default Letter;
