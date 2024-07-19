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
arr.forEach((item,index) => {
    if (item !== index) {
        new_arr.push(item)
    
    }
});
console.log(new_arr);
}

// console.log(firstUniqueElement([2, 3, 4, 2, 3, 6, 4, 1])); // 5


// Task 4

    function firstUniqueElement(arr) {
        let result = {};
        for (let item of arr) {
            if (result[item]) {
                result[item]++;
            } else {
                result[item] = 1;
            }
        }
        for (let item in result) {
            if (result[item] === 1) {
                return parseInt(item);
            }
        }
        return "items are duplicated";
    }
    // console.log(firstUniqueElement([2, 3, 4, 2, 3, 5, 4])) // 5);

// Task 5

