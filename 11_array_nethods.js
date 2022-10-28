let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(5,44);// add element from starting
arrayOfNumbers.unshift(0);
console.log(arrayOfNumbers);
console.log('==============shift()====================');

let array = [11,22,47,81];
console.log(array);
array.shift();// we can remove 0th index number using this
console.log(array);
console.log('=====================slice============');
let arrayNumbers= [1,3,7,8,9,3,7];
let slicedElement = arrayNumbers.slice(2);
console.log(slicedElement);
let slicedValues = arrayNumbers.slice(1,4);
console.log(slicedValues);
// console.log('================splice()=============');
// let arrayNumberss = [1,3,7,8,9,3,7];
// console.log(arrayNumberss);
// arrayNumberss.splice(5);//this removes index numeber after index 5
// console.log(arrayNumberss);
console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);
let splicedElements =  array_numbers.splice(2,3);//It removes the total 3 element starting from index 2
let insertElements = array_numbers.splice(2,0,22);// it will insert element 22 before index 2, 0 means don't replace
array_numbers.splice(2,1,22);
array_numbers.splice(2,2,22,44);// it will remove element from index 2 and added with new element 

console.log(splicedElements);
console.log(array_numbers);




console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
}

for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
//reverse traverse of array
let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);  
}

