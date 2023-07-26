
// task 1 
const reversed = (str) => {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

// task 2 
const sumPositiveNumber = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum += arr[i]
        }
    }
    return sum;
}

// task 3 
const countFrequent = (arr) => {
    let allElements = {}
    let heightFrequency = 0;
    let mostFrequented;
    for (i = 0; i < arr.length; i++) {
        const element = arr[i];
        allElements[element] = (allElements[element] || 0) + 1;
        if (allElements[element] > heightFrequency) {
            heightFrequency = allElements[element]
            mostFrequented = heightFrequency;
        }
    }
    return mostFrequented;
}

// task 4 
function findTwoSumIndices(sortedArray, target) {
    const indices = {};

    for (let i = 0; i < sortedArray.length; i++) {
        const complement = target - sortedArray[i];

        if (complement in indices) {
            return [indices[complement], i];
        }

        indices[sortedArray[i]] = i;
    }

    return null;
}

// task 5 

const calculator = (num1, operator, num2) => {
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else (
        result = num1 / num2
    )
    return result
}

// console.log(calculator(5,'+', 5));

// task 6 

function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*_-+=~';
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
// task 8
const secondSmall = (arr) => {
    const result = arr.sort((a, b) => a - b)[1]
    return result;
}
