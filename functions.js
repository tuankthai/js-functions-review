// Question 1: Multiply by Two
// Write a function that takes an array of numbers as input.
// Multiply each number by 2 and return the new array.

function multiplyByTwo(numbers) {
  // Write your code here
  // const newArr = []
  for (let i = 0; i < numbers.length; i++) {
    // newArr.push(numbers[i]*2)
    // newArr.push(numbers[i]*2)
    numbers[i] = numbers[i]*2
  }
  // return newArr
  return numbers
}

// Question 2: Square Numbers
// Write a function that takes an array of numbers as input.
// Square each number and return the new array.

function squareNumbers(numbers) {
  // Write your code here
     return numbers.map(number  => number ** 2 )

}

// Question 3: Filter Even Numbers
// Write a function that takes an array of numbers as input.
// Filter out the even numbers and return the new array.

function filterEvenNumbers(numbers) {
  // Write your code here
  return numbers.filter(number => number % 2 === 0)
}

// Question 4: Sort Numbers in Ascending Order
// Write a function that takes an array of numbers as input.
// Sort the numbers in ascending order and return the sorted array.

function sortNumbers(numbers) {
  // Write your code here
  return numbers.sort((a,b) => a - b)
}

// Question 5: Calculate Sum of Numbers
// Write a function that takes an array of numbers as input.
// Calculate the sum of all the numbers and return the sum.

function calculateSum(numbers) {
  // Write your code here
  return numbers.reduce((accu, curr) => accu + curr, 0)
}

module.exports = {
    multiplyByTwo,
    squareNumbers,
    filterEvenNumbers,
    sortNumbers,
    calculateSum,
  };