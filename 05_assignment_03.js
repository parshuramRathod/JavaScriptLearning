function marriageEligibility(gender, age,name) {
    var eligible = gender == "male" && age >= 21 ? `Hey ${name} you are eligible` : `${name} you are not eligible for marriage`;
    console.log(eligible);

}
marriageEligibility("male", 25,"Billgates");
marriageEligibility("male", 17, "Stew Jobs");
console.log("===========================2=====================");
function eligibilityForGirl(gender, age, girlname) {
    if(gender == "female" && age >= 18 ){
console.log(`Hey ${girlname} you are eligible of marriage`);
    } else {
        console.log(`${girlname} you are not eligible for marriage`);

    }
    // var girlEligibility = gender == "female" && age >= 18 ? 
    //     : "";
    //     console.log(`Condition Check as per value : ${girlEligibility}`);
}
eligibilityForGirl("female", 16,"Jenifer")
eligibilityForGirl("female", 27,"Malinda Gates")

