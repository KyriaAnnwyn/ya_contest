module.exports = function (arr) {
  let [i, j] = [0, arr.length - 1];
  while (i < j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
    j--;
  }
  return arr;
};
