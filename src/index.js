module.exports = function check(str, bracketsConfig) {
  const brackets = {};
  bracketsConfig.forEach(([open, close]) => {
    brackets[open] = close;
  });
  const stack = [];
  str.split('').forEach((el) => {
    const top = stack[stack.length - 1];
    if (el === brackets[top]) {
      stack.pop();
    } else {
      stack.push(el);
    }
  });
  return stack.length === 0;
}
