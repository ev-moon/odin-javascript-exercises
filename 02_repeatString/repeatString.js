const repeatString = function (word, numRepeat) {
  if (numRepeat < 0) {
    return "ERROR";
  }
  result = "";
  for (let i = 0; i < numRepeat; i++) {
    result += word;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
