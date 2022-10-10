var sqaure = function (value) {
    console.log("square of value=", value * value);
}
sqaure(5);
sqaure(6);
sqaure(25);
sqaure(100);
console.log(typeof sqaure);
console.log("=============================================");
var area = function (base, height) {
    console.log("Area of triangle=", 1 / 2 * base * height);

}
area(45, 34);

var swap_value = function (value_1, value_2) {
    console.log("==============Before swap==================");
    console.log(value_1, value_2);
    console.log("==============After swap==================");
    var stored = value_1;
    value_1 = value_2;
    value_2 = stored;
    console.log(value_1, value_2);
}
swap_value("Virat", "Anushka");
swap_value(1000, 2000);
console.log("=============================================");
// var expression = function (line) {
//     console.log(line);
// }
var expression = "JavaScript the most popular language"
console.log(expression);
console.log("Total character of string");
console.log(expression.length);
console.log("Index of character S");
console.log(expression.indexOf('S'));
console.log("Index of charcter lang");
console.log(expression.indexOf("lang"));
console.log("Last character of string using index");
console.log(expression.charAt(expression.length-1));
console.log("3rd Last character of string using index");
console.log(expression.charAt(expression.length-3));

