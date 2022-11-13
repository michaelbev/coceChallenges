const ArrayNumbersChallenge = require('./ArrayNumbersChallenge')

const test1 = [[2, 2, 2, 3, 4, 1], false]
const test2 = [[1, 1, 2, 10, 3, 1, 12], true]

test(test1[0].join(), () => {
  expect(ArrayNumbersChallenge(test1[0])).toBe(test1[1])
})

test(test2[0].join(), () => {
  expect(ArrayNumbersChallenge(test2[0])).toBe(test2[1])
})
