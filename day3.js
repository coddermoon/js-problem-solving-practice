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
    