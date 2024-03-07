var prompt= require('prompt-sync')();

// // //for(var i=1; i<=10; i++)
// // // 1+..................+10- sum of all number
// // // var i= 1
// // // var sum=0
// // // for(; i<=10; i++){
// // //     sum=sum+i
// // //     console.log(i);
// // //      console.log("Now the sum is", sum);
// // //     }
// // //    console.log('The sum of all number is', sum)



// // // //Write a code to calculate and display the sum of all even numbers between 1 and 500.
var i= 2
var sum=0
for(; i<=500; i=i+2){
    sum=sum+i
    console.log(i);
     console.log("Now the sum is", sum);
    }
   console.log('The sum of all even number is', sum)


//Write a code to calculate and display the sum of all odd numbers between 1 and 500.
   var i= 1
var sum=0
for(; i<=500; i=i+2){
    sum=sum+i
    console.log(i);
     console.log("Now the sum is", sum);
    }
   console.log('The sum of all odd number is', sum)

// //Suppose we have a series: 3+8+13+........  

// - Find the 100th term of this series. The code will display the value of the 100th term of this series. 
//You can use the formula: nth_term = a + (n-1) d 

// - Display the sum of the series up to the 100th term.


var a= 3
var n= 100
//Numbernth_term = a + (n-1) d 
var d=5
console.log("The 100th term is",(a+(n-1)*d))

var i=3
var sum=0
for(; i<=498; i=i+5){
    sum=sum+i
    console.log(i);
     console.log("Now the sum is", sum);
    }
   console.log('The sum of all odd number is', sum)



