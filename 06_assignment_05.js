let givenstrg = function (strgline) {
    let strgLowercase = strgline.toLowerCase();
    let count = 0;
    for (let index = 0; index < strgLowercase.length; index++) {
        let strgchar = strgLowercase.charAt(index);
        let vowel = "aeiou";
        let checkcondition = vowel.includes(strgchar);

        if (checkcondition) {
            count++

        }

    }
    console.log(`The vowel count in given string is : ${count}`);

}
givenstrg("I am a very good IT Devloper")
console.log('==================sum of cube of number===========');
let cubeNo = function () {
    num = 0;
    for (let index = 1; index <= 5; index++) {
        num = index * index * index + num;
    }
    console.log(`The sum of cube of 1 to 5 number is : ${(num)}`);
}
cubeNo();
console.log('======================Reverse the string ===========');
function reverseString(string) {
    let reverseStr = " ";
    for (let index = string.length; index >= 0; index--) {
        reverseStr = reverseStr + string.charAt(index)
       let stringchar = string.charAt(index)
       console.log(stringchar);
        
    }
}
reverseString('Hard work always pays back')



