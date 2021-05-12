let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0
let negative = false

// Connect "Multiply" button to function
document.getElementById('multiply').addEventListener('click', calculate)

function calculate () {
  // Get first number, second number and convert into integers
  firstNum = document.getElementById('first').value
  secondNum = document.getElementById('second').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)

  // Reset answer and negative value
  answer = 0
  negative = false

  // Check first number
  if (firstNum < 0) {
    negative = !negative
    firstNum = Math.abs(firstNum)
  }

  // Check second number
  if (secondNum < 0) {
    negative = !negative
    secondNum = Math.abs(secondNum)
  }

  // Set up for loop
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  
  // Add back negative sign
  if (negative) {
    answer = 0 - answer
  }

  // Show answer
  document.getElementById('answer').innerHTML = answer
}
