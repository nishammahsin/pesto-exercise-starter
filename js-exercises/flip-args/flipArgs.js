function flipArgs(callback) {
  return function(...rest) {
    return callback([...rest].reverse());
  };
}

export { flipArgs };
