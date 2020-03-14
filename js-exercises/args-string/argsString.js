const replacer = (message, replacerString) =>
  message.replace("{}", replacerString);

const argsString = (message, replacerArray) => {
  const interpolationCount = message.split("{}").length - 1;
  let replacedString = message;
  for (let i = 0; i < interpolationCount; i++) {
    replacedString = replacer(replacedString, replacerArray[i]);
  }

  return replacedString;
};

export { argsString };
