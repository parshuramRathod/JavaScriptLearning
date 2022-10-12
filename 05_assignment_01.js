var wordLengthSquare = function (square) {
    console.log(`Given word : ${square}`);
    console.log(`length of word : ${square.length}`);
    var wordlength = square.length;
    return wordlength*wordlength;
}
console.log(`Square of word : ${wordLengthSquare("JavaScript")}`);
console.log('==========================================');
console.log(`Square of word : ${wordLengthSquare("Google")}`);
console.log('==========================================');
console.log(`Square of word : ${wordLengthSquare("Developer")}`);
console.log('==================== 2) Done with the help of Google======================');
var stringLine = function () {
    stringLine= "I am Angular Developer";
    console.log(stringLine);
    var splitstring = stringLine.split(" ")
    console.log(splitstring);
    var reversearray = splitstring.reverse();   
    console.log(reversearray);
    var joinarray = reversearray.join(" ")
    console.log(joinarray);
    console.log('==========================================');
   var stringlength = stringLine.length
   console.log(`string total length : ${stringlength}`);
   var totalwords = stringLine.split(" ")
   var totalwordslength = totalwords.length
   console.log(`Total no. of words : ${totalwordslength}`);
   console.log(`stringlength Divided by total no. of word : ${stringlength/totalwordslength}`);
   console.log(`stringlength multiply by total no. of word : ${stringlength*totalwordslength}`);
}
var returnvalue = stringLine();
