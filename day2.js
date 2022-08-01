/**
 * === === === SOME PROBLEM SOLVING USING ARRAY AND CONDITION === === ===
 */

/**
 * === === PROBLEM -1 === ===
 * 
 * You are given an array:
 *   fruits = ['Apple', 'Banana', 'Orange'];
 * 
         a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
         b) Remove ‘Orange’ and add ‘Watermelon’.


 * 
 */



var fruits = ['apple','banana','orange']

// indexof banana

var indexOfBanana = fruits.indexOf('banana') // output is 1

// replace Banana with a mango

fruits[1]='Mango' //output is ['apple',"mango",orange']

// to remove the orrange

fruits.pop() // ouput [ 'apple', 'Mango' ]

// add ‘Watermelon’

fruits.push('waterlemon') //output is [ 'apple', 'Mango', 'waterlemon' ]

console.log(fruits) 