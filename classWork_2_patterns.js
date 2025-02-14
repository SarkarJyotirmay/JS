
//! pattern - 1 :-
// let n = 5;
// for(let i = 0; i < n; i++){
//     let spaces = "";
//     for(let j = 1; j <= n-(i+1); j++){
//         spaces += "  ";
//     }
//     let nums = "";
//     for(let k = 1; k <= (i *2 +1); k++){
//         nums += k+" ";
//     }

//     console.log(spaces+nums);

// }

// ! Pattern - 2 :
let n = 5;
// upper-half
for(let i = 1; i <= n; i++){
    let spaces = "";
    let nums = "";
    for(let j = 1; j<= n-i; j++){
        spaces += "  ";
    }
    for(let k = 1; k <= i; k++){
        nums += k +" ";
    }
    console.log(spaces+nums);
}
// lower-half
let x = n-1;
for(let i = n-1; i > 0; i--){
    let spaces = "";
    let nums = "";
   for(let j = i; j < n; j++){
    spaces += "  ";
   }
    for(let k = 1; k <= x; k++){
        nums += k + " ";
    }
    x--;   
    console.log(spaces+nums);
    
}


// ! Pattern - 3 :-
// let n = 7;
// // upper half
// for(let i = 1; i <= 2*n - 1; i++){
//     let nums = "";
//     if(i <= n){
//         for(j = i; j >= 1; j--){
//             nums += j + " ";
//         }
//     }
//     else{
//         for(let j = 2*n-i; j >= 1; j--){
//             nums += j + " ";
//         }
//     }
//     console.log(nums);
    
// }

 

// ! Pattern - 4 :-
// let n = 9;
// let x = 1;

// for(let i = n; i >= 1; i--){
//     // spaces
//     let spaces = "";
//     for(let j = 0; j < x; j ++){
//         spaces += "  ";
//     }
//     x++;
//     let nums = "";
//     for(let k = 1; k <= (2*i - 1); k++){
//         nums += k + " ";
//     }
//     console.log(spaces+nums);
    
// }
