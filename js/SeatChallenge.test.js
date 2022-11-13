const ArrayChallenge = require('./SeatChallenge')

const test1 = [[12, 2, 6, 5, 7, 11], '5xXfiXmcX']
const test2 = [[5, 1, 2], '3xXfiXmcX']
const test3 = [[8, 1, 8, 9], 'ERROR']

test(test1[0].join(), () => {
  expect(ArrayChallenge(test1[0])).toBe(test1[1])
})

test(test2[0].join(), () => {
  expect(ArrayChallenge(test2[0])).toBe(test2[1])
})

test(test3[0].join(), () => {
  const t = () => {
    ArrayChallenge(test3[0])
  }
  expect(t).toThrow('InvalidInput')
})
