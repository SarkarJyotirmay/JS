// Object declaration
const kankana = {
  name: "Kankana",
  role: "Nurse",
  education: "Bachelors",
  hobbies: ["cooking", "eating", "listen to music"],
  skills: {
    medical: "first aid",
    clinical: "documentation",
  },
};

function printData(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      for (let data of obj[key]) {
        console.log(`${key} : ${data}`);
      }
    } else if (typeof obj[key] == "object") {
      for (let prop in obj[key]) {
        console.log(`${key} - ${prop} : ${obj[key][prop]}`);
      }
    } else {
      console.log(`${key} : ${obj[key]}`);
    }
  }
}

// printData(kankana);

//? ~~~~~~~~~~~~~~~~~~~~~ Spread operator ~~~~~~~~~~~~~~~~~~~~~~
const scores = [83, 78, 90, 98, 56, 32, 88, 73, 67];

// * add three highest scores

  const goodScroes = scores.sort((a, b) => b - a);
  scores.reverse();
  console.log("scroes", scores);
  console.log("good scores", goodScroes);

  function maxSum(score1, score2, score3){
    console.log(score1 + score2 + score3);
    
  }
  maxSum(...scores);

//? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ rest operator ~~~~~~~~~~~~~~~~~~~

function addNumToTotal(a,b,c,d){
    console.log(a+b+c+d);
}
// addNumToTotal(...scores) //
//? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ destructuring ~~~~~~~~~~~~~~~~~~~
//? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ shallow copy ~~~~~~~~~~~~~~~~~~~
//? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ deep copy ~~~~~~~~~~~~~~~~~~~




