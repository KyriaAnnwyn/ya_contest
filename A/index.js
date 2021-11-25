module.exports = function ([jewels, stones]) {
  let result = 0;
  const jewelsObj = Object.fromEntries(
    jewels.split("").map((letter) => [letter, letter])
  );
  for (let i = 0; i < stones.length; i++) {
    if (jewelsObj[stones[i]]) result++;
  }
  return result;
};
