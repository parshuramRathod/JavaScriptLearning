const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log('=========================1-Total length of given array=========================');
console.log(array_numbers.length);
console.log('=========================2-first and last element of array======================');
console.log(`First element is : ${array_numbers[0]}`);
console.log(`Last  element is : ${array_numbers[array_numbers.length - 1]}`);
console.log('========================3=============================');
console.log(`Third last number of array is : ${array_numbers[array_numbers.length - 3]}`);
console.log('========================4============================');
for (let index = 0; index < array_numbers.length; index++) {
    let arrayNumChar = array_numbers[index]
    if (arrayNumChar % 2 == 0) {
        console.log(`Even Numbers are : ${arrayNumChar}`);

    }
}
console.log('=======================5=======================');
for (let index = 0; index < array_numbers.length; index++) {
    let arrayOddchar = array_numbers[index];
    if (arrayOddchar % 2 != 0) {

        console.log(`Odd numbers are : ${arrayOddchar}`);
    }
}
console.log('========================6============================');
for (let index = 0; index < array_numbers.length; index++) {
    let arrayNumChar = array_numbers[index]
    if (index % 2 == 0) {
        console.log(`Even position are : ${arrayNumChar}`);

    }
}
console.log('=======================7=======================');
for (let index = 0; index < array_numbers.length; index++) {
    let arrayOddchar = array_numbers[index];
    if (index % 2 != 0) {

        console.log(`Odd position are : ${arrayOddchar}`);
    }
}
console.log('========================8================');
let sum = 0;
for (let index = 0; index < array_numbers.length; index += 1) {

    sum += array_numbers[index];
   
}
console.log(`Addition of given array is = ${sum}`);
console.log('========================9==================');
for (let index = 0; index < array_numbers.length; index++) {
 let arraychar = array_numbers[index];
 if (arraychar%5==0) {
    console.log(`The multiple of 5 is : ${arraychar}`); 
 }
}
console.log('========================10==================');
console.log(`Is number 115 available in given array : ${array_numbers.includes(115)}`);
console.log('========================11===================');
console.log(`Is number 23  available in given array : ${array_numbers.includes(23)}`);