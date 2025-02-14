let nested = {
    name: "Jyotirmay", 
    role: "Student", 
    age: 22,
    // skills: {
    //     fontEnd: "JS",
    //     backEnd: "java",
    //     frameWorks: "TW"
    // }
}

// let keys = Object.keys(nested).reverse();
// console.log(keys);
// for(let i of keys){
//     console.log(i + " : "+ nested[i]);
// }

let pairs = Object.entries(nested);
// for(let pair of pairs){
//     console.log(pair[0] + " : "+ pair[1]);
// }

// for(let i = 0; i < pairs.length; i++){
//     console.log(pairs[i][0], pairs[i][1]);
// }

let arr = [1,2,3,4,5,6,7];
let doubled = arr.map((majdoor)=>{
    return majdoor*2;
});
// console.log(doubled);

let evens = arr.filter((num)=> {
   return !(num % 2);
});

console.log(evens);

//? ~~~~~~~~~~~~~~~~~~~~~~~~~ hasOwn ~~~~~~~~~~~~~~~~~~~~~~~
const kankana = {
    name: "Kankana",
    age: 22,
    married: false,
} 

console.log(Object.hasOwn(kankana, "name")); // true
console.log(kankana.hasOwnProperty("age")); // true





