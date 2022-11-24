function Letter({ letterId, letterState }) {
  return (
    <input
      type='text'
      className='letter'
      letter-id={letterId}
      maxLength='1'
      letter-state={letterState}
      name={letterId}
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
