//WAP to find count of vowels using function
let givenstrg = function (strg) {
    let strgLowerCase = strg.toLowerCase();
    console.log(`Given string : ${strgLowerCase}`);
    let strgcount = 0;
    for (let index = 0; index < strgLowerCase.length; index++) {
        let strgchar = strgLowerCase.charAt(index)
        let vowel = "aeiou";
        let strgvowel = vowel.includes(strgchar);
        if (strgvowel) {
            strgcount = strgcount + 1
        }
    }
    console.log(`Total count of vowels in given string is : ${strgcount}`);
}
givenstrg("My Technology stack is HTML, CSS, JavaScript")

console.log("=====================Factorial of no.=============================");
// let factNo = function (number) {
let count = 5// initialization 
let number = 5
while (count >= 1) {   //condition 
number = number * count
count-- //update
    console.log(number);
}


// }
// factNo(5)
console.log('===========================');
var sumSquare = function () {
    num = 1;
    for (let index = 1; index <= 5; index++) {
       var numone = num*num
       var squareadd = numone + index   
       
    } 
    console.log(squareadd); 
}
sumSquare();