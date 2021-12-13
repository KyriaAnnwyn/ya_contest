const { withMap, withObj } = require("./index");
// Сгруппировать анаграммы
// использование map,set
const testData = [
  [
    ["abc", "acb", "asd", "sda", "dsa", "gfd"],
    [["abc", "acb"], ["asd", "sda", "dsa"], ["gfd"]],
  ],
];

const testData2 = [
  [
    [1, 2, 3, [4, 5, [6]], 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ],
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(withObj(input)).toStrictEqual(output);
  });
});
testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(withMap(input)).toStrictEqual(output);
  });
});
