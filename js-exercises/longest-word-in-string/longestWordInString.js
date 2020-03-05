function longestWordInString(anyString) {
  const SINGLE_SPACE = " ";
  const wordsArray = anyString.split(SINGLE_SPACE);
  const lengthOfwords = wordsArray.map(word => word.length);
  const lengthOfLongestWord = Math.max(...lengthOfwords);
  return lengthOfLongestWord;
}

export { longestWordInString };
