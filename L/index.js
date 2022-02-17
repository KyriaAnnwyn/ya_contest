module.exports = function (vector) {
  let result = 0;
  let currMaxPrev = 0;
  let currMaxCur = 0;
  const TARGET_NUM = "1";
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === TARGET_NUM) {
      currMaxCur++;
      if (currMaxCur + currMaxPrev > result) result = currMaxCur + currMaxPrev;
    } else {
      currMaxPrev = currMaxCur;
      currMaxCur = 0;
    }
  }
  
  if (result === vector.length) result--;
  
  return result;
};
