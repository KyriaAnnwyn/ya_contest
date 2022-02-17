const inputProcessing = require('./index');

const testData = [
  [['5', '1', '0', '1', '0', '1'], 2],
  [['3', '0', '0', '0'], 0],
  [['10', '0', '1', '1', '0', '1', '1', '1', '0', '1', '1'], 5],
  [['10', '0', '1', '1', '0', '0', '1', '1', '1', '0', '1'], 4],
  [['5', '1', '1', '1', '1', '1'], 4],
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(inputProcessing(input)).toStrictEqual(output);
  });
});
