
let count = 0;
let myFunc = ()=>{
    if(count == 5){
        return;
    }
    count++;
    console.log("HI");
    myFunc();
    
}
myFunc();