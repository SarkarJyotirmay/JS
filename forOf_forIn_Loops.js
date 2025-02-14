//! For Of Loop
const arr = [1,2,3,4,5,6,7];
arr[2] = 'x';
  // This is possible because objects are passed by references in JavaScript
                // But if you try to change the name/address/reference of the array it wont be possible

//? print all values of arr ~~~~~~~~
for(let el of arr){
    el += 2;
    console.log(el);
}

// forOf loop brings the values of the array directly

let nameNumber = new Map();
nameNumber.set("Jyotirmay", "8509056082");
nameNumber.set("Kankana", "8509053425");
nameNumber.set("Baba", "8509076539");
// nameNumber.set("Jyotirmay", 8509052299); // can't do that because key's are unique in Map data type
nameNumber.set("Valon", "9064559078");

// Map by default doesn't support iteration so we are using entries
for(let [key, val] of nameNumber.entries()){
    
   let lastTwo =  val.slice(-2);
   masked = lastTwo.padStart(val.length,"*")
    console.log(`${key} : ${masked}`);
}

//  forIn Loop
// for in loop brings the key of object/array

for(let key in arr){
    key += 1;
    console.log(key);
    
}








