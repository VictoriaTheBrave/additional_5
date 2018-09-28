module.exports = function check(str, bracketsConfig) {
  const sequence = str.split("");
  const stack = [];
  let lastStackElem, element;
  for (let i = 0; i < sequence.length; i++) {
    element = getIndices(sequence[i], bracketsConfig);
    if (bracketsConfig[element[0]][0] !== bracketsConfig[element[0]][1]) {
      if (element [1] === 0) {
        stack.push(element[0]);
      } else {
        lastStackElem = stack.pop();
        if (lastStackElem === undefined || element[0] !== lastStackElem) {
          return false;
        }
      }
    } else {
      if (stack.length - 1 < 0 || stack[stack.length - 1] !== element[0]) {
        stack.push(element[0]);
      } else {
        stack.pop();
      } 
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

// function returns array[i,j], where i - index of subarray in bracketsConfig and j - index of symbol inside subarray
function getIndices (element, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) { 
    for (let j = 0; j < 2; j++) { 
      if(element === bracketsConfig[i][j]) return [i, j]; 
    }	
  }
}