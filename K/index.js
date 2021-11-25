module.exports = {
  stackUseFlat,
  recursiveFlat,
};

function recursiveFlat([first, ...tail]) {
  if (first === undefined) return [];
  if (tail.length) {
    return Array.isArray(first)
      ? [...first, ...recursiveFlat(tail)]
      : [first].concat(...recursiveFlat(tail));
  } else {
    return [first];
  }
}

function stackUseFlat(arr) {
  const result = [];
  const stack = [];
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    if (Array.isArray(el)) {
      stack.push(el);
    } else {
      result.push(el);
    }
    while (stack.length) {
      let stackEl = stack.pop();
      if (Array.isArray(stackEl)) {
        for (let index = stackEl.length; index--; ) {
          const element = stackEl[index];
          stack.push(element);
        }
      } else {
        result.push(stackEl);
      }
    }
  }
  return result;
}
