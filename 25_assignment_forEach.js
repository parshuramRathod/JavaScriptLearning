const arrayNumber = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.error('=================Logged given array element with index =====================================');
arrayNumber.forEach((element, index) => {
    console.log(element, index);
});
console.error('=================Logged Positve number=====================================');
arrayNumber.forEach((arrayElement) => {
    if (arrayElement > 0) {
        console.log(arrayElement);
    }
});
console.error('=================Logged Negative number=====================================');
arrayNumber.forEach((arrayElement) => {
    if (arrayElement < 0) {
        console.log(arrayElement);
    }
});
console.error('=================Logged Even number=====================================');
arrayNumber.forEach(element => {
    if (element % 2 == 0) {
        console.log(element);
    }
});
console.error('========================================================================');
let sum = 0;
arrayNumber.forEach(element => {
    sum = sum + element;
});
console.log(`The total addition of array element is : ${sum}`);
console.error('=================Logged Even position number=====================================');
arrayNumber.forEach((element,index)=>{
    if (index%2==0) {
        console.log(element,index);
    }
});
console.error('=================Logged odd position number and it is negative only====================');
arrayNumber.forEach((element,index)=>{
    if (index%2!=0 && element<0) {
        console.log(element,index);
    }
});