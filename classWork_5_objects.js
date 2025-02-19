/* 
 Q1.) Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/
let myObj = {};
myObj.name = "John";
myObj.surname = "Smith";
myObj.name = "Pete";
delete myObj.name;
// console.log(myObj);

/*
Q2.) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
Should work like that:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/
let channu = {
    name: "Channabasappa Sinnur",
    age: 67,
};

let tank = {};

function isEmpty(obj){
    if (Object.keys(obj).length == 0){
        return true;
    }
    return false;
}
// console.log(isEmpty(channu));
// console.log(isEmpty(tank));

/*
Q3.) We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.

*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  function findSum(obj){
    let sum = 0;
  for(let val of Object.values(obj)){
    sum += val;
  }
  return sum
  }
//   console.log(findSum(salaries));

  /*
Q4.) Create an object calculator with three methods:
read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
  */


let calculator = {
    a:0,
    b:0,
    read: function(){
       this.a =  Number(prompt("Enter a number", 0));
       this.b = Number(prompt("Enter another number", 0)); 
    },
   sum : function(){
    return this.a + this.b
   },
    mul: function(){  
        return this.a * this.b;
    }

  };
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());
  
  
  
  


