const { stackUseFlat, recursiveFlat } = require("./index");

const testData = [
  [
    [1, 2, 3, [4, 5, [6]], 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ],
  [
    [1, null, [4, 5, [6]], 7, ""],
    [1, null, 4, 5, 6, 7, ""],
  ],
  [
    [1, 2, 3, [4, 5, [6]], 7, 8, [9, [10, [11, [12]]]]],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ],
  [[], []],
  [
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, "str", [2, 3]],
    [1, "str", 2, 3],
  ],
  [
    [1, "str", [2, [3, "s", 4]]],
    [1, "str", 2, 3, "s", 4],
  ],
];

// testData.forEach(([input, output], index) => {
//   test(`${index + 1}`, () => {
//     expect(iterationFn(input)).toStrictEqual(output);
//   });
// });
testData.forEach(([input, output], index) => {
  test(`recursiveFlat : ${index + 1}`, () => {
    expect(recursiveFlat(input)).toEqual(output);
  });
});
testData.forEach(([input, output], index) => {
  test(`stackUseFlat : ${index + 1}`, () => {
    console.log(stackUseFlat(input));
    expect(stackUseFlat(input)).toEqual(output);
  });
});
