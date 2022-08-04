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


    function foo(){

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

     function make_avg(num1,num2,num3) {

        const average = (num1+num2+num3)/3;

        return average;
        
     }
    
     

    //  call the function within 3 number of value

    const subject1 = 60;
    const subject2 = 59;
    const subject3 = 60;

   

  var totalAvarage =   make_avg(subject1,subject2,subject3)

    // console the output

   console.log(totalAvarage);

   