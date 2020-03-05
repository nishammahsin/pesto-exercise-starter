const shiftCipher = (stringToencode, cipher) => {
  let encodedString = "";
  for (const eachLetter of stringToencode) {
    const charCode = eachLetter.charCodeAt(0);
    let encodedChar = "";
    if (charCode > 64 && charCode < 91) {
      encodedChar = charCode + cipher;
      encodedString += String.fromCharCode(
        encodedChar >= 91 ? 64 + encodedChar - 91 + 1 : encodedChar
      );
    } else if (charCode > 96 && charCode < 123) {
      encodedChar = charCode + cipher;
      encodedString += String.fromCharCode(
        encodedChar >= 123 ? 96 + encodedChar - 123 : encodedChar
      );
    } else {
      encodedString += eachLetter;
    }
  }
  return encodedString;
};

function rot13(stringToEncode) {
  const encodedString = shiftCipher(stringToEncode, 13);
  return encodedString;
}

export { rot13 };
