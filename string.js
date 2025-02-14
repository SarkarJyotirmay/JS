const str = "Javascript is awsome"
console.log(str.length);

console.log(str.indexOf("a", 2)); // 3
console.log(str.indexOf("i", 21)); // -1

//here position plays like : from 2 and after the index of a if the item is no present in the string or the position is out of bounds then it will give -1

console.log(str.includes("i")); // true, here also we can use position as same
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.slice(0,10)); // Javascript
// Slice can not cut from right to left so the first answer should always smaller than the 2nd however -ve integers are treated from last mens : -1 = last idx, -2 is 2nd last so -1 is trated as > 0 here
 
str.substring(0,10)// works same as slice

const str2 = "Javascript is easy";

str2.replace("easy", "interesting");
console.log(str2.replaceAll("i", "*"));
console.log(str2); // well strings are really immutable

console.log(str2.replace(/i/g,"_"));

const ex = "hi";
console.log(ex.padStart(6, "*")); // ****hi
console.log(ex.padEnd(6, ":)")); // hi:):)

const arr = str2.split(" "); //["Javascript", "is", "easy"]
console.log(arr);

const str3 = "No break   today";
const arr2 = str3.split(/\s+/);
console.log(arr2);



 

