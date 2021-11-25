module.exports = function (vector) {
  let result = 0;
  let currMax = 0;
  const TARGET_NUM = "1";
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === TARGET_NUM) {
      currMax++;
      if (currMax > result) result = currMax;
    } else {
      currMax = 0;
    }
  }
  return result;
};
