const limitFunctionCallCount = (callback, functionCallLimit) => {
  let callbackCalledCount = 0;
  const callbackCallLim = (...rest) => {
    if (callbackCalledCount < functionCallLimit) {
      callbackCalledCount++;
      return callback(...rest);
    }
    return null;
  };
  return callbackCallLim;
};

export { limitFunctionCallCount };
