function BetterStringLib() {}

BetterStringLib.prototype.reverse = function(string) {
  const stringArray = [];
  for (const character of string) {
    stringArray.push(character);
  }

  return stringArray.reverse().join("");
};

BetterStringLib.prototype.equal = function(string1, string2) {
  return string1 === string2;
};

export { BetterStringLib };

const a = new BetterStringLib();
const b = a.equal("mañana", "mañana");
console.log(b);
