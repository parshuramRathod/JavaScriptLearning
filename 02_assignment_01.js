function technlogyStack() {
    console.log("I am UI Developer Technology stack is-");
    console.log("HTML,CSS,Bootstrap,Angular9");
 }
technlogyStack();
console.log("===============================================");
function details(first_name,last_name) {
    console.log(first_name, last_name);
    return first_name+last_name;
}
var fullName = details("Parshuram","Rathod");
console.log(fullName);

function swap_values(cricketer,actress) {
console.log("===================Before swap============================");
console.log(cricketer,actress);
console.log("===================After swap============================");
var stored_value=cricketer
cricketer=actress;
actress=stored_value;
console.log(cricketer,actress);
}
swap_values("Virat", "Anushka");
swap_values(1000,2000)
console.log("===============================================");
function add_three_number(num_1,num_2,num_3) {
    console.log(num_1 + num_2 + num_3);
    return num_1 + num_2 + num_3;
    
}
add_three_number(10.23,600,40);
add_three_number("Hello", "Good","Morning");


