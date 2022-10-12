var greatestNo = function (num1, num2) {
    var result = num1 > num2 ? num1 : num2;
    console.log(`Greater number is : ${result}`);

}
greatestNo(10, -10);
greatestNo(800, 899)
console.log("=====================2=========================");
var evenOddValue = function (num) {
    var result = num % 2 == 0 ? true : false;
    return result;

}
var returnvalue = evenOddValue(29);
console.log(`is value true or false: ${returnvalue}`);
var returnvalue2 = evenOddValue(44);
console.log(`is value true or false: ${returnvalue2}`);
var returnvalue3 = evenOddValue(0);
console.log(`is value true or false : ${returnvalue3}`);
var returnvalue4 = evenOddValue(101);
console.log(`is value true or false: ${returnvalue4}`);
console.log("=====================3=========================");
var evenOddLength = function (word) {
    var resultwordlength = word.length;
    console.log(`word length is : ${resultwordlength}`);
    var iswordEvenOdd = resultwordlength % 2 == 0 ? "EVEN" : "ODD";
    return iswordEvenOdd;
}
var evenOrOdd = evenOddLength("Javascript");
console.log(`is word is even or odd : ${evenOrOdd}`);
var evenOrOdd2 = evenOddLength("developer");
console.log(`is word is even or odd : ${evenOrOdd2}`);
var evenOrOdd3 = evenOddLength("Google");
console.log(`is word is even or odd : ${evenOrOdd3}`);
