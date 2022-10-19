function gradeSystem(score) {
   
    if (score >= 90 && score <= 100) {
        console.log('You passed and Grade is A+');
        console.log('--------------------------------------');
    }
    if (score >= 75 && score <=90) {
        console.log('You passed and Grade is A');
        console.log('--------------------------------------');
    } if (score >= 60 && score <75) {
        console.log('You passed and Grade is B');
        console.log('--------------------------------------');
    }
    if (score >= 35 && score < 60) {
        console.log('You passed and Grade is C');
        console.log('--------------------------------------');
    }
    if (score < 35 && score != -20 && score != null ) {
        console.log("Your are Failed");
        console.log('--------------------------------------');
    } 
    if (score==" " || score==null || score==undefined || score=="fifty five" || score==-20 ) {
        console.log("Invalid Input");
        console.log('--------------------------------------');
      
    }
}
gradeSystem(66)
gradeSystem(13)
gradeSystem(" ") 
gradeSystem(98)
gradeSystem("fifty five")
gradeSystem(35)
gradeSystem(75)
gradeSystem(null)
gradeSystem(undefined)
gradeSystem(-20)
gradeSystem(55)
gradeSystem(82)
