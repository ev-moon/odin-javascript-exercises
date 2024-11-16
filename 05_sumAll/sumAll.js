const sumAll = function (int1, int2) {
  if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
    return "ERROR";
  }
  let n1 = Math.min(int1, int2);
  let n2 = Math.max(int1, int2);
  if (n1 < 0 || n2 < 0) {
    return "ERROR";
  }
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
