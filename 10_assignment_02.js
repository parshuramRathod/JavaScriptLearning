let arrayOfNames = ['Kamat','Memon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur'];
console.log('===============================Given array================================');
console.log(arrayOfNames);
let duplicateNameRemoved = new Set(arrayOfNames)
console.log('==========After removing the duplicate name the array is :=====================');
console.log(duplicateNameRemoved);
console.log(`The Length of duplicate Item removed is : ${arrayOfNames.length - duplicateNameRemoved.size}`);
console.log(`Total no of count after removing duplicate names is : ${duplicateNameRemoved.size}`);