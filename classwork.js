// TAsk 1

// let arr = [ 1,2,3,4,56]
// let odds = []
// let evens = []
// arr.forEach((item) => item % 2 == 0 ? evens.push(item)  : odds.push(item))

// console.log({ evens, odds });
// let truthy = []
// let falsy = []


// let arr = ["null", 1, 5, 0, 'a', null, " ", 'bcd', undefined, "", false, , "hello World", "false", ""]
// arr.filter((item) => truthy.push(item))
// console.log(truthy);


// for (const i in this) {
// //         if (this[i] == 'a' || this[i] == 'i' || this[i] == 'o' || this[i] == 'e' || this[i] == 'u') {
// //             count += 1;
// //         }
//     }


let fruits = ["olma", "anor", "nok", "apelsin", "uzum", " banan ", " hmmm", "jkkjdkfjdfhj"]
let arr = ["a", "i", "e", "u", "o"]

arr.forEach(element => {
    fruits.filter((item) => item.includes(element))

});
console.log(fruits);
