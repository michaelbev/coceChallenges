const FileParseHashChallenge = require('./FileParseHashChallenge')

const test1 = ['FileParseHashChallenge', '0bX78Xa3X9eXe8Xf9Xc4X9bX60X09X00X38XbaX9xXfiXmcX']

// test(test1[0], () => {
//   return FileParseHashChallenge().then(data => {
//     expect(data).toBe(test1[1])
//   })
// })

// jest.setTimeout(3000)

test(test1[0], () => {
  expect(FileParseHashChallenge(test1[0])).toBe(test1[1])
})

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
