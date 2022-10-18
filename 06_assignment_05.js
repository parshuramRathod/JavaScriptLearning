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
let cubeNo = function (num) {
    
    for (let index = 0; index <=5 ; index++) {
        num = num*num*num + index;
      
    }
    console.log(num);
    
  
}
cubeNo(0);



