// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

var myNum = function (argue1, argue2, argue3) {

    return argue1 + argue2 + argue3 / 3


}
console.log(myNum(2, 3, 4))

function average(fredsNum) {
    let newNum = 0;
    for (let i = 0; i < fredsNum.length; i++) {
        newNum = newNum + (fredsNum[i]);
    }
    return newNum / fredsNum.length;
}
console.log(average([1, 4, 7]))
console.log(average([10, 5]))
console.log(average([1.5, 3, 2.5, 1]))



