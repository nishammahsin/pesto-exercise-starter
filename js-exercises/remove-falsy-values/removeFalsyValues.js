function removeFalsyValues(array) {
  const falsyFreeArray = array.filter(item => item);
  return falsyFreeArray;
}

export { removeFalsyValues };
