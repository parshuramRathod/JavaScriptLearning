// 10 to 0
// var myName = "mohit"
// var lenthStr = myName.length - 1; // 
// var reverseStr = "";
// for (let index = lenthStr; index >= 0; index--) {
//     console.log(myName.charAt(index));
//     reverseStr = reverseStr + myName.charAt(index)
// }
// console.log(reverseStr);

console.log('==============================================');
let givenLine = " Hi I am Parshuram ";
let lineLength = givenLine.length - 1;
let reverseStr= " ";
for (let index = lineLength; index >=0 ; index--) {
let linechar = givenLine.charAt(index)
reverseStr = reverseStr + linechar
if (lineLength >=0 && linechar != " " ) {
    console.log(reverseStr);
}
console.log(linechar);

}