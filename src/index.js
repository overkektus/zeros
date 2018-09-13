module.exports = function getZerosCount(number) {
  let zeros = 0;
  for (let i = 1; i <= number; i++) {
    num = i
    while (num % 5 === 0){ 
      num /= 5;
      zeros++;
    }
}
  return zeros;
}