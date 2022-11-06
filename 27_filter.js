const arrayOfNumber = [2,3,5,4,6,1];

const newAarry = arrayOfNumber.filter((element)=>{
    return element>= 4;

});
console.log(newAarry);

console.log("================== reduce() method=======");

let sum = arrayOfNumber.reduce((value,runningTotal)=>{
    return value + runningTotal
});
console.log(sum);