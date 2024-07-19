// Task 1

function sanitizeString(str) {
    let arr = str.split("")
    let result = []
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    arr.forEach(element => {
        if (chars.includes(element)) {
            result.push(element)
        }
    });

    return result.join(" ")
}

// console.log(sanitizeString("he@llo! w0rld#")); // "hello0rld"

// Task 2

function separatePositivesAndNegatives(arr) {
    let negatives = []
    let positives = []
    arr.forEach(item => {
        if (item > 0) {
            positives.push(item)
        }
        else {
            negatives.push(item)
        }
    });

    return { positives, negatives }
}

// console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5]));


// Task 3

function firstUniqueElement(arr) {
    let new_arr = []
    arr.forEach((item, index) => {
        if (item !== index) {
            new_arr.push(item)

        }
    });
    console.log(new_arr[0]);
}

// console.log(firstUniqueElement([2, 3, 4, 2, 3, 6, 4, 1])); // 5


// Task 4
function elementCounts(arr) {

    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let count = 1
        for (let g = 0; g < arr.length; g++) {
            if (arr[i] == arr[g]) {
                obj[arr[i]] = count
                count++
            }

        }

    }
    return obj
}

console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// { 1: 1, 2: 2, 3: 3, 4: 4 }



// Task 5


function swapElements(arr, k) {
    let n = arr.slice(k, k + 1)
    let m = arr.slice(arr.length - 1)
    arr.splice(arr.length - 1, 1, ...n)
    arr.splice(k, 1, ...m)
    return arr
}

// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]




