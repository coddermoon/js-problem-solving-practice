/**
 * 
 * ==========     === Practice Problem 1 === ==============
 * 
     1) Write a function called foo() which prints “foo” and a function called bar() which prints 
    “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call 
    the foo() to see the output.
 
 * 
 */

// write a function called foo


function foo() {

    console.log('foo')



    bar()

}

// /create a new function bar 

function bar() {
    console.log('bar')
}

foo()


/**
* 
* ==========     === Practice Problem 2 === ==============
* 
 2) Write a function called make_avg() which will take an three integers and return the
 average of those values.

 
* 
*/

function makeAvarage(num1, num2, num3) {

    const average = (num1 + num2 + num3) / 3;

    return average;

}



//  call the function within 3 number of value

const subject1 = 60;
const subject2 = 59;
const subject3 = 60;



var totalAvarage = makeAvarage(subject1, subject2, subject3)

// console the output

//    console.log(totalAvarage);

/**
* 
* ==========     === Practice Problem 3 === ==============
* 
Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values.

 
* 
*/
function arr(){
    console.log('hello')
}

arr()



/**
* 
* ==========     === Practice Problem 3 === ==============
* 
5) You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up.

* 
*/

let signal = 'yellow'

switch (signal) {
    case 'green':
        console.log('road is free now you can go');
        
        break;
case 'yellow':
    console.log('please wait sometime and waiting for green signal')
    break;
    case 'red':
        console.log('alert stop there is a danger zone')
    default:
        
        break;
}