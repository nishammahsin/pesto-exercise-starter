const limitFunctionCallCount = (callback, functionCallLimit) => (...rest) => {
  for (let index = 0; index < functionCallLimit; index++) {
    return callback(...rest);
  }
};

export { limitFunctionCallCount };
