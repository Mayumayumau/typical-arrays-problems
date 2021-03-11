
exports.min = function min (array) {
  if (!array) return 0;
  let min = array[0] || 0;
  array.forEach(element => {
    if (min > element) min = element;
  })
  return min;
}

exports.max = function max (array) {
  if (!array) return 0;
  let max = 0;
  array.forEach(element => {
    if (max < element) max = element;
  })
  return max;
}

exports.avg = function avg (array) {
  if (!array) return 0;
  let sum = 0;
  array.forEach(element => {sum += element})
  return array.length ? sum / array.length : 0;
}
