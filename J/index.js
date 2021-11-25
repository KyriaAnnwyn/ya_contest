module.exports = {
  withObj: function (arr) {
    const result = {};
    console.log({ arr });
    arr.forEach((word) => {
      const key = word.split("").sort().join("");
      result[key] ? result[key].push(word) : (result[key] = [word]);
    });
    console.log({ result });
    return Object.values(result);
  },
  withMap: function (arr) {
    const result = new Map();
    console.log({ arr });
    arr.forEach((word) => {
      const key = word.split("").sort().join("");
      result.has(key)
        ? result.set(key, [...result.get(key), word])
        : result.set(key, [word]);
    });
    console.log({ result: result.values() });
    return [...result.values()];
  },
};
