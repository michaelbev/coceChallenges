// Back-end Challenge
// In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. Your goal is to count how many items exist that have an age equal to 32. Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line). Finally, then output the SHA1 hash of the file.

// Example Input
// {"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}

// File Contents (output.txt)
// IAfpK
// 9snd2

// Example Output
// 7caa78c7180ea52e5193d2b4c22e5e8a9e03b486
// Example Output with ChallengeToken
// 7cXa7Xc7X80Xa5Xe5X93X2bXc2Xe5X8aXe0Xb4X6xXfiXmcX
// Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every third character with an X.

// Your ChallengeToken: x0fi7mc6

async function FileParseHashChallenge() {
  const https = require('https')
  const fs = require('fs')
  const crypto = require('crypto')
  const file = 'output.txt'
  const token = 'x0fi7mc6'
  let finalHex = 'notset'
  let nth = 3 // the nth character you want to replace
  let replaceWith = 'X' // the character you want to replace the nth value

  try {
    return await new Promise((resolve, reject) => {
      // write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER.
      https.get('https://coderbyte.com/api/challenges/json/age-counting', resp => {
        let data = ''
        let pair = []
        let age32 = []

        resp.on('data', chunk => {
          data += chunk
        })

        resp.on('end', () => {
          // console.log(resp);
          // Remove the noise found in first 10 characters and the last 2 characters
          data = data.slice(9, -2)
          // console.log('Sliced data', data)
          // Split the string into an array of strings
          let array = data.split(',')
          // console.log('Array of strings', array)
          // Remove the var= noise found in each element
          array.forEach(function (val, index) {
            array[index] = val.substring(val.indexOf('=') + 1)
          })

          // Convert the array into an array of string and integer pairs
          array.forEach(function (val_1, index_1) {
            pair[index_1] = [array[index_1], parseInt(array[index_1 + 1])]
            array.shift()
          })

          // find items that have an age equal to 32.
          pair.forEach(function (val_2, index_2) {
            if (val_2[1] === 32) {
              age32.push(val_2[0])
            }
          })

          // create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line).
          fs.openSync(file, 'w')
          age32.forEach(function (val_3, index_3) {
            fs.appendFileSync(file, val_3 + '\n'),
              err => {
                if (err) throw err
              }
          })
          //read file
          // let line = readline.createInterface({
          //   input: fs.createReadStream(file),
          // })
          // line.on('line', function (line) {
          //   console.log('Line in file',line)
          // })

          // Output the SHA1 hash of the file.
          let hex = crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex')

          // Append ChallengeToken to hex
          hex = hex.concat(token)
          // console.log(`hexBeforeReplace:${hex}`)

          // Replace every third character with an X.
          //// REGEX - Not correct yet
          //// finalHex = hex.replace(/(.{2})/g, '$1X')
          // Older way yet works, good enough for now
          hex = hex.split('')
          for (var i = nth - 1; i < hex.length - 1; i += nth) {
            hex[i] = replaceWith
          }
          finalHex = hex.join('')

          // console.log(`finalHex:        ${finalHex}`)
          resolve(finalHex)
        })
      })
    })
  } finally {
    return finalHex
  }
}

module.exports = FileParseHashChallenge

// FileParseHashChallenge()
