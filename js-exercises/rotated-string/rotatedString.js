const rotatedString = (string, rotatedString) => {
  let isMatch = false;

  for (let i = 1; i < string.length; i++) {
    isMatch =
      rotatedString.substring(i, rotatedString.length) +
        rotatedString.substring(0, i) ===
      string;
    if (isMatch) return isMatch;
  }
  return isMatch;
};
export { rotatedString };
