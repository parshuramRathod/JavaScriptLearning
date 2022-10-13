function evenOdd(num) {
    if (num % 2 == 0) {
        console.log(`The number value is EVEN : ${num}`);

    } else {
        console.log(`The number value is ODD  : ${num}`);
    }

}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);
console.log("===================2=================");
function eligibleForVote(age) {
    if (age >= 18) {
        console.log(`You are eligible for vote     : ${age}`);
    } else {
        console.log(`You are not eligible for vote : ${age}`);
    }
}
eligibleForVote(18);
eligibleForVote(20);
eligibleForVote(17);
eligibleForVote(40);
console.log("===================3=================");
function stringcontain(word) {
    var wordlength = word.length;
    console.log(wordlength);
    if(wordlength>10){
        console.log(`Yes it contain more than 10  character : ${word}`);
    }else {
        console.log(`It does not contain more than 10 character : ${word}`);
    }
}
stringcontain("JavaScript-ES6");
console.log("===================5=================");
function wordcheck(word) {
    var check = word.startsWith("Java")
    if (check==true) {
console.log(`It starts with Java`);
    } 
}
wordcheck("JavaScript Language")