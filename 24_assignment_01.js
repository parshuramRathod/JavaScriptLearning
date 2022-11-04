console.log('Name: Parshuram Rathod');
console.log('Assignemnt - 01');
console.error('===============Massage logged using arrow function =================');
let greet = () => 'Good Afternoon, Today is Friday'
console.log(greet());
console.error('====================================================================');
let multiplication = (num1, num2, num3 = 1) => {
    let mul = num1 * num2 * num3
    console.log(`The multiplication of given number : ${mul}`);
}
multiplication(5, 5, 2);
multiplication(10, 4);
console.error('====================================================================');
let addition = (value1, value2, value3, value4, value5) => {
    return value1 + value2 + value3 + value4 + value5;
}
let value_1_result = addition(100, 100, 200, 349, 756);
console.log(`The addition of given values is : ${value_1_result}`);
let value_2_result = addition('I am', 'learning', 'ES6', 'features', 'In depth');
console.log(`The addition of given values is : ${value_2_result}`);
