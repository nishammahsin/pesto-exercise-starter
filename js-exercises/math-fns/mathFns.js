// Don't change the export values.
// You can use the function in the Math module

const sqrt = number => {
  if (!isNaN(number)) return Math.sqrt(number);
};

const power = (base, exponent) => {
  if (!isNaN(base) && !isNaN(exponent)) return Math.pow(base, exponent);
};

const round = number => {
  if (!isNaN(number)) return Math.round(number);
};
export { sqrt, power, round };
