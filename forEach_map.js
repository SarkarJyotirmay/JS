const arr = [1,2,3,4,5,6,7];

let printMe = (item, idx, arr) =>{
  
   arr[idx] =  item += 2;
    console.log(`${item} ${idx} ${arr}` );
    
}

arr.forEach(printMe)

// console.log(arr);
// arr.forEach((i)=>{
//     i+= 2;
//     console.log(i);
    
// });
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     arr[i] += 2;
// }
// console.log(arr);

const nums = [1,2,3,4,5];
let updatedNums = nums.map(square)
function square(a){
    return a*a;
}
console.log(updatedNums);

let updateNums2 = nums.map((item)=>{
   return item*item;
})
console.log(updateNums2);

//? filter ~~~~~~~~~~~~~~~ 
const ages = [12, 19, 17, 64, 32, 22, 22];
let above18 = ages.filter((age)=>{
    return age >= 18;
});
console.log(above18);

//? every & some ~~~~~~~~~~~~~~~
const biggerThan18 = (age)=>{
    return age > 18;
} 
let isStrictlyAdult = ages.every(biggerThan18);
console.log(isStrictlyAdult);
let isJustAdult = ages.some(biggerThan18);
console.log(isJustAdult);

//? sort  ~~~~~~~~~~~~~~~
const prices = [99, 79.99, 120000, "13999", 120.99, 24999, 23499, 34999];
prices.sort((a, b)=>{
//    return Number(a) - Number(b) ;
return a - b;
// return b - a;
})
console.log(prices);

// ? find ~~~~~~~~~~~~
let wantedPrice = prices.find((price)=>{
    return price > 99;
})
let wantedPriceIndex = prices.findIndex((price)=>{
    return price > 99;
})
console.log(`Price : ${wantedPrice}, Index : ${wantedPriceIndex}`);

console.log(prices.reverse());










