/*
2. Find All Duplicate Elements that appear more than once
Input: [1, 3, 4, 2, 2]
Output: [2]
*/

const array = [1, 3, 4, 2, 2];

function findDuplicateElements() {
    const duplicateElements = []; // Array to store duplicate numbers

    // Outer loop: check each element
    for (let k = 0; k < array.length; k++) {
        let element = array[k];
        let count = 0;

        // Inner loop: count how many times 'element' appears
        for (let j = 0; j < array.length; j++) {
            if (element == array[j]) {
                count++;
            }
        }

        // If it appears more than once and is not already in the duplicates list
        if (count > 1 && !duplicateElements.includes(element)) {
            duplicateElements.push(element); // Add to duplicates
        }
    }

    return duplicateElements;
}

console.log(findDuplicateElements());
