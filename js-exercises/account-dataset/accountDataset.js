const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.filter(balance => balance.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(balance => ({
    ...balance,
    rounded: Math.round(balance.amount)
  }));
}
function sumOfBankBalances() {
  const sumOfbankBalancesInDollar = bankBalances.reduce(
    (accumulator, currentValue) =>
      accumulator + parseFloat(currentValue.amount),
    0
  );

  return parseFloat(sumOfbankBalancesInDollar.toFixed(2));
}

function sumOfInterests() {
  const statesToInclude = ["WI", "IL", "WY", "OH", "GA", "DE"];
  const RATE_OF_INTEREST = 18.9;
  const sumOfbankBalancesInDollar = bankBalances.reduce(
    (accumulator, currentValue) => {
      if (statesToInclude.includes(currentValue.state)) {
        const currentSum =
          accumulator +
          parseFloat(currentValue.amount) +
          (parseFloat(currentValue.amount) * RATE_OF_INTEREST) / 100;
        return parseFloat(currentSum.toFixed(2));
      }
      return accumulator;
    },
    0
  );
  return sumOfbankBalancesInDollar;
}

function higherStateSums() {}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
