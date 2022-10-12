function information() {
    console.log("I am Parshuram Tukaram Rathod, I am engineering graduate I have two years of experience.");
    console.log("My technology stack is HTML,CSS,JS.also i have used github and github desktop for source control management,about ide i have good exposer of vs code");
}
function personal() {
    console.log("I have completed graduation from solapur university with 71%, so far my family background concern there are five member my parent, two sisters and i am the youngest");
    console.log("if i talk about my hobbies and strength i like cricket, cooking and my strenghts are self motivated,flexible and quick learner, hard worker");
    return "thank you";

}
information();
var title = personal();
console.log(title);
console.log("===================================================================");
function name(first_name, last_name) {
    console.log(first_name + last_name);
}
var full_name = name("Parshuram", "Rathod");
console.log("--------------------------------------------------");
function swap_values(value_1, value_2) {
    console.log("==========Before Swap===========");
    console.log(value_1, value_2);
    console.log("==========After Swap===========");
    var temp = value_1;
    value_1 = value_2;
    value_2 = temp;
    console.log(value_1, value_2);

}
swap_values("virat", "anushka");
swap_values(1000, 2000);
console.log("===========================================");
var find = "JavaScript the most popular language";
console.log(find);
console.log(find.length);
console.log(find.charAt(find.length - 1));
console.log(find.charAt(3));
console.log(find.indexOf("S"));
console.log("==============================================");
var wordLength = function (word) {
    console.log(word);
    var wordLengthth = word.length;
    console.log(wordLengthth);
    var trimValue = word.trim()
    console.log(trimValue);
    console.log(word.indexOf("r"));
    console.log(wordLengthth - trimValue.length);
    console.log();
}
wordLength("     Hey you are doing good, keep it up      ");
