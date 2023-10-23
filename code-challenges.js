// // ASSESSMENT 1: Coding Practical Questions

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, leave comments to help us understand your thought process

// // Reminder: Ensure you are in the correct directory
// // Run the file with the following command: $ node code - challenges.js

// // --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// // const fruit1 = "cherry"
// // const fruit2 = "kiwi"
// // Expected outcome: "cherry"

// // Pseudo code: 


// // --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9

// // Pseudo code: adding both arrays to get result

// const combinedRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
// const totalength = combinedRuns.length;
// console.log(totalength)

// // --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// const currentCohort = "Golf 2023"
// // Expected output: "3202 floG"

// // Pseudo code:  i have to break the words into letters and reverse them, followed by joining them together to get result.
// const mirror = currentCohort.split(``).reverse().join(``)
// console.log(mirror)

// // --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// // Expected output: 13 5 -5 27
// // Pseudo code: what we are doing is getting all the numbers together and removing all even numbers to get our given result of odds.
const onlyOdd = (array) => {
    let newarr = []
    for (let i = 0; array.length; i++) {
        if (array[i] % 2 !== 0){
            newarr.push(array[i])
        }
    }
    return newarr
}
console.log(onlyOdd(stockExchange[i]))