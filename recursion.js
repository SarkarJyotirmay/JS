//! print 1 to 5 
let printIncreasing = (n)=>{
    if(n == 1){
        console.log(1);
        return;
        
    } 
    printIncreasing(n-1);
    console.log(n);
} 
printIncreasing(5);

//! print 5 to 1
let printDecreasing = (n) =>{
    if(n == 1){
        console.log(1);
        return;
    }
    console.log(n);
    printDecreasing(n-1);
} 
printDecreasing(5);

//! Factorial of n
let factorial = (n) =>{
    if(n == 1){
        return 1;
    }
   return  factorial(n-1) * n
} 
console.log(factorial(5));
