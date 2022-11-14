// Seat arrangement challenge
// accept an array of integers representing occupied seats
// return the number of seat combinations that can be made
// first item in arrac is the number of desks

// 1. seat must be open
// 2. seat on the left must be open
// 3. seat down must be open

function ArrayChallenge(arr) {
  let deskCount = arr[0]
  let seatCombo = []
  let seatCombos = []
  const [, ...occupiedDesks] = arr
  highestSeat = occupiedDesks.reduce((a, b) => Math.max(a, b), -Infinity)

  console.log = function () {}
  console.log('INPUT: ' + JSON.stringify(arr))
  console.log('deskCount: ' + deskCount)
  console.log('occupiedDesksCount: ' + occupiedDesks.length)
  console.log('occupiedDesks: ' + occupiedDesks)
  console.log('highest desk seat: ' + highestSeat)

  // Test for valid input
  if (occupiedDesks.length > deskCount || highestSeat > deskCount) {
    throw new Error(`InvalidInput${JSON.stringify(arr)}`)
  }

  for (let i = 1; i <= deskCount; i++) {
    // console.log('\nEVALUATING seat (' + i + ')')
    //is the seat occupied
    if (!occupiedDesks.includes(i)) {
      // Seat i is open!
      seatCombo = [i, i + 1]
      //is next seat open && seat on the left
      if (!occupiedDesks.includes(i + 1) && !(i % 2 == 0)) {
        // Next seat is open!

        seatCombos.push(seatCombo)
        // console.log('--    adding seatCombo [' + seatCombo + ']' + ' Now:' + seatCombos.length)
      } else {
        // console.log('--not adding seatCombo [' + seatCombo + ']' + ' Still:' + seatCombos.length)
      }

      seatCombo = [i, i + 2]

      //is seat down open && not last seat
      if (!occupiedDesks.includes(i + 2) && i < deskCount - 1) {
        seatCombos.push(seatCombo)
        // console.log('--    adding seatCombo [' + seatCombo + ']' + ' Now:' + seatCombos.length)
      } else {
        // console.log('seat down(' + (i + 2) + ') occupied')
        // console.log('--not adding seatCombo [' + seatCombo + ']' + ' Still:' + seatCombos.length)
      }
    }
    // else console.log('seat (' + i + ') occupied')
  }

  console.log('RESULTS ')
  console.log('  Input:            : ' + JSON.stringify(arr))
  console.log('  Seat Combinations : ' + JSON.stringify(seatCombos))
  console.log('  Seat Combos       : ' + seatCombos.length + '\n')
  return seatCombos.length + 'xXfiXmcX'
}

module.exports = ArrayChallenge
