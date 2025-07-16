/*
1. Find the Duplicate Number in an Array
Input: [1,3,4,2,2] -> output: 2
*/
/*
1. Find the Duplicate Number in an Array
Input: [1,3,4,2,2]
Output: 2
*/

// Define the array with numbers, including a duplicate '2'
const Array = [1, 3, 4, 2, 2];

function DuplicateNumbers() {
    // Outer loop: go through each element in the array one by one
    for (let i = 0; i < Array.length; i++) {
        let Element = Array[i]; // Current element to check
        let count = 0;          // Counter to count how many times this element appears

        // Inner loop: check this element against every element in the array
        for (let j = 0; j < Array.length; j++) {
            if (Element == Array[j]) { // If it matches, increment count
                count++;
            }
        }

        // If the count is 2, this means we have found a duplicate
        if (count == 2) {
            const result = `Duplicate Number is: ${Element}`;
            return result; // Return the result and stop the function
        }
    }
}

// Call the function and print the result
console.log(DuplicateNumbers());


// ======================================================================

/*
Find the Duplicate Number in an Array using Set
Input: [1, 3, 4, 2, 2]
Output: 2
*/

const array = [1, 3, 4, 2, 2];

function findDuplicate() {
    const seen = new Set(); // Create an empty Set to store seen numbers

    for (let num of array) {
        // If the number is already in the set, it is the duplicate
        if (seen.has(num)) {
            return `Duplicate Number is: ${num}`;
        }
        // Otherwise, add the number to the set
        seen.add(num);
    }

    // If no duplicate is found
    return 'No duplicate number found';
}

console.log(findDuplicate());
