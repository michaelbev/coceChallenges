// accept array
// return true if the sum of the array is greater than the highest multiple of two numbers in the array
// return false if the sum of the array is less than the highest multiple of two numbers in the array
console.log = function () {}

function ArrayNumbersChallenge(arr) {
  function doubleSumArray(arr) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0) * 2
    return sum
  }

  function highestMultiple(arr) {
    arr.sort(function (a, b) {
      return b - a
    })
    return arr[0] * arr[1]
  }

  console.log(arr)
  console.log('doublesum: ' + doubleSumArray(arr))
  console.log('highestMultiple: ' + highestMultiple(arr))

  if (doubleSumArray(arr) < highestMultiple(arr)) return true
  else return false
}

module.exports = ArrayNumbersChallenge
