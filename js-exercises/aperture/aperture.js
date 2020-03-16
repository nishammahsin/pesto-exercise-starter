function aperture(lengthOfTuples, array) {
  const tuples = [];
  for (let i = 0; i < array.length - lengthOfTuples + 1; i++) {
    const tuple = array.slice(i, i + lengthOfTuples);
    if (tuple.length === lengthOfTuples) {
      tuples.push(tuple);
    }
  }
  return tuples;
}

export { aperture };
