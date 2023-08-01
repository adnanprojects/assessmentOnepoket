const sum = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
};

module.exports = { sum };
