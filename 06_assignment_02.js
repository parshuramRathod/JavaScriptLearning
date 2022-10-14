//WAP to find numbers from 5 to 15 by incrementing by 1
for (let index = 5; index <= 15; index++) {
    console.log(index);
}
console.log('=============================');
//WAP to find numbers from 50 to 40 by decrementing by 1
for (let index = 50; index >= 40; index--) {
    console.log(index);
}
console.log('================================');
//WAP to find first 15 odd numbers
var countOdd = 0;
for (let index = 1; index < 100; index++) {
    if (index % 2 != 0) {
        console.log(index);
        countOdd = countOdd + 1;
        if (countOdd >= 15) {
            break;
        }
    }
}
console.log('=================================');
//WAP to find first 10 even numbers
for (let index = 0; index <= 20; index = index + 2) {
    console.log(index);
}
console.log('==================================');
//WAP to print a table of 5....50
for (let index = 5; index <= 50; index = index + 5) {
    console.log(index);
}
console.log('================================');
//WAP to print a table of 10....100
for (let index = 10; index <= 100; index = index + 10) {
    console.log(index);
}
console.log('====================================');
//WAP to print a table of 10 in reverse direction 100,90,80....10
for (let index = 100; index >= 10; index = index - 10) {
    console.log(index);
}
