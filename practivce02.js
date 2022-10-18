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
console.log('===========sum of square of 1 to 5 number ================');
let sumSquare = function () {
     num = 0;
    for (let index = 1; index <= 8; index++) {
    
      num = index * index + num  
       
    } 
    console.log(num); 
}
sumSquare();