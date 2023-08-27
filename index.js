// ARRAYS
// Find and Update Element:

// Create an array named fruits with the following values: "apple", "banana", "orange", "grape".
// Access the third element directly [2] ("orange") and change its value to "kiwi".
// Add and Remove Elements:

// const fruits = ["apple", "banana", "orange", "grape"];
// fruits[2] = "kiwi"
// fruits.splice(1, 0, "pear", "cherry")
// console.log(fruits);

// Create an array named numbers with the following values: 2, 4, 6, 8, 10.
// Add the number 12 to the end of the numbers array.
// Remove the first element from the array.
// const numbers = [ 2, 4, 6, 8, 10];
// numbers.push(12);
// numbers.shift();

// Array Concatenation:
// Create two arrays, firstNames with values: "John", "Emma", "Michael", and lastNames with values: "Doe", "Smith", "Johnson".
// Concatenate the firstNames and lastNames arrays to create a new array named fullNames.

// const firstNames = ["John", "Emma", "Michael"]
// const lastNames = ["Doe", "Smith", "Johnson"]

// let fullNames = firstNames.concat(lastNames);
// console.log(fullNames);

// Array Iteration - Sum of Elements:
// Create an array named ages with the following values: 25, 30, 18, 42, 15.
// Use a loop to calculate and return the sum of all the ages.
// const ages = [25, 30, 18, 42, 15];
// let totalSum = 0;
// const sumOfAges = (arr) => {
//     for (let i=0; i<arr.length; i++) {
//         totalSum += arr[i];
//     }
// }
// sumOfAges(ages);
// console.log(totalSum);

// Array Filtering - High Scores:
// Create an array named scores with the following values: 85, 92, 78, 95, 88.
// Write a function that filters the scores array to only include scores that are greater than or equal to 90.
// const scores = [85, 92, 78, 95, 88]

// const passingScores = scores.filter(score => score >= 90);
// console.log(passingScores)

// Array Searching - Index of Element:
// Create an array named countries with values: "USA", "Canada", "Mexico", "France", "Germany".
// Write a function that checks if "Mexico" exists in the countries array. If it does, return its index; otherwise, return -1.

// const countryNames = ["USA", "Canada", "Mexico", "France", "Germany"]

// const checkNames = (arr, name) => {
//     let countryIndex = arr.indexOf(name);
//     return countryIndex !== -1 ? countryIndex : -1;
// } 

// console.log(checkNames(countryNames, "Mexico"));

// Array Transformation - Square Values:
// Create an array named numbers with the following values: 3, 7, 1, 9, 4.
// Write a function that squares each element of the numbers array and returns a new array with the squared values.

// const numbers = [3, 7, 1, 9, 4]
// const squaredNumbers = numbers.map( (num) => {
//     return num * num;
// })
// console.log(squaredNumbers)

// Array Sorting - Ascending Order:
// Create an array named grades with the following values: 87, 95, 76, 88, 92.
// Write a function that sorts the grades array in ascending order and returns the sorted array.
// const grades = [87, 95, 76, 88, 92];
// const sortGrades = () => {
//     return grades.sort((a, b) => {return a-b})
// };
// console.log(sortGrades(grades));


// Array Mapping - Double Values:
// Create an array named data with the following values: 10, 20, 30, 40, 50.
// Write a function that doubles each element of the data array and returns a new array with the doubled values.

// const data = [10, 20, 30, 40, 50];
// const doubledData = data.map((arr) => {
//     return arr * 2;
// });
// console.log(doubledData);

// Array Reduction - Maximum Value:
// Create an array named values with the following values: 34, 12, 78, 53, 90.
// Write a function that finds and returns the maximum value in the values array.
// const values = [34, 12, 78, 53, 90];
// const maxValue = values.reduce((maxVal, current) => {
//    return current > maxVal ? current : maxVal;
// });

// console.log(maxValue)

// Copy this object with it’s nested object

let movie = {
    name: "Titanic",
    releaseYear: 1997,
    director: "James Cameron",
    actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
    starActor: {
        name: "Leonardo Dicaprio",
        age: 5,
        born: 1889,
        linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",
        headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"
    },
    budgetInMillions: 200
}

// Try to make functions that do the following: 

const getMovieName = (movieObject) => {
    return movieObject.name;
    };
// Access the star actor’s age property  and change the value to 48.
movie.starActor.age = 48;
// Access the star actor’s born property and change the value to 1989.
movie.starActor.born = 1989;
// Add a new property to the starActor object called isPopular and set its value to true.
movie.starActor.isPopular = true;
// Add a new property to the movie object called isGoodMovie with a value of undefined.
movie.isGoodMovie = undefined;
// Access the actors array, loop through it and check if the movie has “Tom Cruise” in it. If true, set isGoodMovie to true, else set isGoodMovie to false.

if (movie.actors.includes("Tom Cruise")) {
     movie.isGoodMovie = true
} else {
    movie.isGoodMovie = false;
}

console.log(movie);



let cohortFour = {
    classSize: 5,
    instructor: {
        name: "Fred",
        age: 40,
        completedCohortIds: [3, 77, 45, 23],
        email: "fred@fred.com",
        assistant: {
            name: "Brad",
            age: 38,
            email: "Brad@brad.com"
        }
    },
    classGrades: [99, 100, 89, 88, 95]
}

 

// Try to make functions that do the following: 

 

// Check if the class size is > 10
const checkClassSize = (object) => {
    return object.classSize > 10 
};
console.log(checkClassSize(cohortFour));

// Check if the instructor has completed more than 2 cohorts.
const completedCohort = (object) => {
    return object.instructor.completedCohortIds.length > 2
};
console.log(completedCohort(cohortFour));
// Create a function called changeAssistant that will change the name, age, and email of the assistant
const changeAssistant = (object, name, age, email) => {
    object.instructor.assistant.name = name;
    object.instructor.assistant.age = age;
    object.instructor.assistant.email = email;
}
console.log(changeAssistant(cohortFour,"Jane","36","jane@jane.com"));
// Loop through the completedCohortIds array and check if Fred completed cohort 55
const fredCompleteCohort = (obj) => {
    return obj.instructor.completedCohortIds.includes(55);
};
console.log(fredCompleteCohort(cohortFour));
// Loop through the classGrades and check if the average grade is > 90
const averageGrade = (obj) => {
    const sumOfArray = obj.reduce((a, b) => a + b),
    lengthOfArray = obj.length;
    return sumOfArray / lengthOfArray;
};
