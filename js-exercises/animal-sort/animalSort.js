const animalSort = animals =>
  animals.sort((item1, item2) => {
    if (item1.numberOfLegs > item2.numberOfLegs) {
      return 1;
    }
    if (item1.numberOfLegs < item2.numberOfLegs) {
      return -1;
    }
    if (item1.name < item2.name) {
      return -1;
    }
    if (item1.name > item2.name) {
      return 1;
    }
    return 0;
  });

export { animalSort };
