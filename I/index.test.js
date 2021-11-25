const fn = require("./index");

const testData = [
  [
    [
      { from: "Piter", to: "Minsk" },
      { from: "Rostov", to: "Krasnodar" },
      { from: "Moscow", to: "Rostov" },
      { from: "Krasnodar", to: "Piter" },
    ],
    [
      { from: "Moscow", to: "Rostov" },
      { from: "Rostov", to: "Krasnodar" },
      { from: "Krasnodar", to: "Piter" },
      { from: "Piter", to: "Minsk" },
    ],
  ],
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    console.log(fn(input));
    expect(fn(input)).toStrictEqual(output);
  });
});
