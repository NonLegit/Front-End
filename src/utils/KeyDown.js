function KeyDown(tempString, value) {
  return (tempString.length < 25 && !tempString.includes(value));
}

export default KeyDown;
