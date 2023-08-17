// ARRAYS
// Find and Update Element:

// Create an array named fruits with the following values: "apple", "banana", "orange", "grape".
// Access the third element directly [2] ("orange") and change its value to "kiwi".
// Add and Remove Elements:

const fruits = ["apple", "banana", "orange", "grape"];
fruits[2] = "kiwi"
fruits.splice(1, 0, "pear", "cherry")
console.log(fruits);

// Create an array named numbers with the following values: 2, 4, 6, 8, 10.
// Add the number 12 to the end of the numbers array.
// Remove the first element from the array.
const numbers = [ 2, 4, 6, 8, 10];
numbers.push(12);
numbers.shift();
console.log(numbers);

// Array Concatenation:
// Create two arrays, firstNames with values: "John", "Emma", "Michael", and lastNames with values: "Doe", "Smith", "Johnson".
// Concatenate the firstNames and lastNames arrays to create a new array named fullNames.
const firstNames = ["John", "Emma", "Michael"];
const lastNames = ["Doe", "Smith", "Johnson"];
let names = firstNames.concat(lastNames);

console.log(names)

// Array Iteration - Sum of Elements:
// Create an array named ages with the following values: 25, 30, 18, 42, 15.
// Use a loop to calculate and return the sum of all the ages.
const ages = [25, 30, 18, 42, 15]
let totalSum = 0;

// Array Filtering - High Scores:
// Create an array named scores with the following values: 85, 92, 78, 95, 88.
// Write a function that filters the scores array to only include scores that are greater than or equal to 90.

// Array Searching - Index of Element:
// Create an array named countries with values: "USA", "Canada", "Mexico", "France", "Germany".
// Write a function that checks if "Mexico" exists in the countries array. If it does, return its index; otherwise, return -1.

// Array Transformation - Square Values:
// Create an array named numbers with the following values: 3, 7, 1, 9, 4.
// Write a function that squares each element of the numbers array and returns a new array with the squared values.

// Array Sorting - Ascending Order:
// Create an array named grades with the following values: 87, 95, 76, 88, 92.
// Write a function that sorts the grades array in ascending order and returns the sorted array.

// Array Mapping - Double Values:
// Create an array named data with the following values: 10, 20, 30, 40, 50.
// Write a function that doubles each element of the data array and returns a new array with the doubled values.

// Array Reduction - Maximum Value:
// Create an array named values with the following values: 34, 12, 78, 53, 90.
// Write a function that finds and returns the maximum value in the values array.