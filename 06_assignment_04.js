//Count the total no of vowels using includes() of given string
var givenstrg = "Good Morning IT champ";
var strgLowerCase = givenstrg.toLowerCase();
var vowel = "aeiou";
var count = 0;
for (let index = 0; index < strgLowerCase.length; index++) {
if (vowel.includes(strgLowerCase[index])) {
    
    console.log(`The count of vowels of ${vowel}`);
    count= count+ 1; 
}   
}
console.log("==================== 2-finding vowels using function============");
var strgfunction = function (strgname) {
    var strgLowerCase = strgname.toLowerCase();
    var vowelFind = "aeiou";
    var result = 0;
    for (let index = 0; index < strgLowerCase.length; index++) {
        if (vowelFind.includes(strgLowerCase[index])) {
             result++;
        }
    } 
    return result;
}
var returnValue = strgfunction("I love JavaScript");
console.log(`The return value of vowel count is : ${returnValue}`);

console.log("================== 3- Sum of number from 1 to 10============");
var sumOfNumber = function () {
    num = 0;
    for (let index = 1; index <=10; index++) {
        num = num + index;
    }   
    console.log(num);
}
sumOfNumber();
console.log("============= 4-Sum of square of number================");
var sumSquare = function () {
    num = 0;
    for (let index = 1; index <= 8; index++) {
        num = index * index + num;
       
    } 
    console.log(num); 
}
sumSquare();
console.log("=========== 5- For given string find odd and even position using function=========");
function evenPositionChars(stringOne) {
    var stringOnelength = stringOne.length
    for (let index = 0; index < stringOnelength; index++) {
        var stringchar = stringOne.charAt(index)
       if (index%2==0 && stringchar!= " ") {
        console.log(stringchar);    
       }  
    }
}
evenPositionChars("Hard work always pays back");
console.log("==============string 2====================");
evenPositionChars("Soon I will be Angular IT Champ")
console.log('==============odd position================');
function oddPositionChars(stringOne) {
    var stringOnelength = stringOne.length
    for (let index = 0; index < stringOnelength; index++) {
        var stringchar = stringOne.charAt(index)
       if (index%2!=0 && stringchar!= " ") {
        console.log(stringchar);    
       }  
    }
}
oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I will be Angular IT Champ")



