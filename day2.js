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



/**
 * === === PROBLEM -2 === ===
 * 
 *  You and your friends Tom, Jane, Peter and John got their final exam results. Your total 
    score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
    and John’s total score is 40. The grading chart is 
    80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less => F grade
    Write a program to find your and your friends’ grades using if-else.

        


 * 
 */

    var friendName = 'tom';
    var friendScore=59;

    // check condition

    if(friendScore>=80){
        console.log('Dear '+friendName+' '+ 'you Got A Grade')
    }else  if(friendScore>=60){
        console.log('Dear '+friendName+' '+ 'you Got B grade')
    
    }else  if(friendScore>=50){
        console.log('Dear '+friendName+' '+ 'you Got B grade')
    
    }else  if(friendScore>=40){
        console.log('Dear '+friendName+' '+ 'you Got B grade')
    }else{
        console.log('oh no! '+friendName+' '+ 'you are Failed. work hard and passed next chance')
    }