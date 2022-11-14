const FileParseHashChallenge = require('./FileParseHashChallenge')

const test1 = [
  'FileParseHashChallenge',
  '0bX87X81Xa3Xb9Xe2Xe8XafX92Xc4X19Xb8X60Xe0X97X00Xd3X80XbaXf9Xx0XfiX7mXc6X',
]

// Adding more time does not help
// jest.setTimeout(10000)

// test('FileParseHashChallenge', async () => {
//   expect(await FileParseHashChallenge()).toBe('0bX78Xa3X9eXe8Xf9Xc4X9bX60X09X00X38XbaX9xXfiXmcX')
// })

// These tests await yet still do not work

// test(test1[0], () => {
//   expect(FileParseHashChallenge()).toBe(test1[1])
// })

test(test1[0], async () => {
  expect(await FileParseHashChallenge()).toBe(test1[1])
})

// test(test1[0], () => {
//   return FileParseHashChallenge().then(data => {
//     expect(data).toBe(test1[1])
//   })
// })

// test(test1[0], done => {
//   function callback(error, data) {
//     if (error) {
//       done(error)
//       return
//     }
//     try {
//       expect(data).toBe(test1[1])
//       done()
//     } catch (error) {
//       done(error)
//     }
//   }

//   FileParseHashChallenge(callback)
// })
