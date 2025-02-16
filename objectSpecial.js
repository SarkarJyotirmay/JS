const kankana = {
    name: "Kankana",
    age: 22,
    isMarried: false,
    hobbies: ["Cooking", "Singing"]
}

/*
When we try to assign key and values of an object to anotheer. It does not work according to us.
because Objects work on references.
In other words Objects are passed by refenrences(memory address).
*/
//?~~~~~~~~~~~~~~~~~~ Shallow Copy ~~~~~~~~~~~~~~~~
/*
It is a process of copying/cloning an object. In this case we can clone the values of variables but can't copy the direct values of objects(inner/nested object to be precised) instead we copy their reference.
For that reason when we make any changes in the clonned inner object it reflects in the origian inner object as well.
*/
const channu = {
    name: "Channu",
    age: 21,
    hasHair: false,
    skills: {
        frontEnd: "JS",
        backEnd: "Java"
    },
    canDo: ()=>{
        console.log("Hello World!");
        
    }
}

const clonedChannu = Object.assign({}, channu);

clonedChannu.name = "Chomu";
// console.log("Clonned Channu - ", cloneChannu);
// console.log("Original Channu -", channu);

//* problem arives when we modify inner object

clonedChannu.skills.frontEnd = "CSS";
// console.log("Clonned Channu - ", clonedChannu);
// console.log("Original Channu -", channu);

// cloneChannu.canDo();

//?~~~~~~~~~~~~~~~~~~~ Deep Copy ~~~~~~~~~~~~~~~~~~~  
/*
To solve the problem of shallow copy the process used is called deep copy.
In this we follow two steps 
1. Convert the object in a String by JSON.stringify(object)
2. Then convert the string to an Object by JSON.parse(object)
but in this case one issue arrives thaat this process can't load or clone functiona and date-times
in other words it ignores them.
To solve this we can either use codelash cdn or can use custom logic with loops
*/
const jyotirmay = {
    name: "Jyotirmay",
    age: 22,
    hasHair: true, 
    skills: {
        frontEnd: "JS", 
        backEnd: "Java", 
    },
    canDo: ()=>{
        console.log("Channu Asli Chomu hai! 🤣");
    }
}

let clonedJyotirmay = JSON.parse(JSON.stringify(jyotirmay));

clonedJyotirmay.skills.frontEnd = "CSS";
// console.log("Clonned Jyotirmay - ", clonedJyotirmay);
// console.log("Original Jyotirmay - ", jyotirmay);


const ans = structuredClone(jyotirmay);
console.log(ans);

 
//! // Look in the console we do not have canDo method
// console.log("Clonned Jyotirmay - ", clonedJyotirmay);

// console.log(clonedJyotirmay.hasOwnProperty("canDo")); // false
// console.log(clonedJyotirmay.hasOwnProperty("name")); // true
//! // but shallow coppied object has the method
// console.log(clonedChannu.hasOwnProperty("canDo")); // true



