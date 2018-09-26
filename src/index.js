module.exports = function getZerosCount(number) {
  // your implementation
  let result = 0;
  while (number > 0){
    number /= 5;
    result += Math.floor(number);
  }
  return result;
}
