const fruits_seasonal = ['Banana','Orange','Apple','Mango','Water Melon'];
console.log('=====================1=======================');
for (let index = 0; index < fruits_seasonal.length; index++) {
    const element = fruits_seasonal[index];
    console.log(element);
    
}
console.log('====================2-Papaya added before banana =======================');
fruits_seasonal.unshift('Papaya');
console.log(fruits_seasonal);
console.log('====================3-Mango removed from array================');
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
console.log('====================4-Pineapple inseted at last===================');
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);
console.log('===================5-Dragon fruit inserted before water melon===================');
fruits_seasonal.splice(4,0,'Dragon Fruit');
console.log(fruits_seasonal);
console.log('===================6- Orange Replaced with Kiwi=========================');
fruits_seasonal.splice(2,1,'Kiwi');
console.log(fruits_seasonal);
console.log('===================7- index 1 to 4 element logged=======================');
let slicedElement = fruits_seasonal.slice(1,4);
console.log(slicedElement);
console.log('====================8===============================');
let fruitsLength = fruits_seasonal.length;
let sliced = fruits_seasonal.slice(fruitsLength-3)
console.log(sliced);