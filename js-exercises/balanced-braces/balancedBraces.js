const balancedBraces = string => {
  const stack = [];

  const open = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  const closed = {
    "}": true,
    "]": true,
    ")": true
  };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
};

export { balancedBraces };
