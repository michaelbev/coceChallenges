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

const https = require('https')
const fs = require('fs')
const crypto = require('crypto')
const file = 'output.txt'
const token = 'x0fi7mc6'

https
  .get('https://coderbyte.com/api/challenges/json/age-counting', resp => {
    let data = ''
    let pair = []
    let age32 = []

    resp.on('data', chunk => {
      data += chunk
    })

    resp.on('end', () => {
      // console.log(resp);
      data = data.slice(9, -2)
      // console.log('here is the response data', data)
      let array = data.split(',')
      // console.log('here is the array data', array)
      array.forEach(function (val, index) {
        array[index] = val.substring(val.indexOf('=') + 1)
      })
      // console.log('here is the array data substringed', array)
      array.forEach(function (val, index) {
        // console.log('here is the pair', array[index], array[index + 1])
        pair[index] = [array[index], parseInt(array[index + 1])]
        array.shift()
      })

      // console.log('here is the paired array data', pair)
      // console.log('here is the first pair', pair[0])

      pair.forEach(function (val, index) {
        if (val[1] === 32) {
          age32.push(val[0])
        }
      })
      // console.log('here is the paired 32 year old data', age32)
      //clear or create file
      fs.openSync(file, 'w')
      age32.forEach(function (val, index) {
        fs.appendFileSync(file, val + '\n'),
          err => {
            if (err) throw err
          }
      })
      // //read file
      // let line = readline.createInterface({
      //   input: fs.createReadStream(file),
      // })
      // line.on('line', function (line) {
      //   console.log(line)
      // })
      let hex = crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex')

      hex = hex.concat(token)

      // console.log(hex)

      // replace each 3rd
      console.log(hex.replace(/(..)./g, '$1X'))
    })
  })
  .on('error', err => {
    console.log('error:', err)
  })