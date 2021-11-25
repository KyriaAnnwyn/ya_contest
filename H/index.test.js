const reverseArr = require("./index");

const testData = [
  [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1],
  ],
  [
    [1, 2, 3, 4],
    [4, 3, 2, 1],
  ],
  [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  [[], []],
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(reverseArr(input)).toStrictEqual(output);
  });
});
