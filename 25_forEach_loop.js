let show = () => {
    console.log('Hi');
}
show(10, 'test')

const arrayNumber = [10, 20, 30, 20, 40, 20, 10];
arrayNumber.forEach(function (currentValue, index, array) {
    console.log(currentValue, index, array);
});

arrayNumber.forEach((currentValue) => {
    console.log(currentValue);
});

const arrayNum = [22, 44, -10, 33, -25];
arrayNum.forEach((value, index) => {
    if (value < 0) {
        console.log(value, index);

    }
});

console.log('=================Travese set using forEach()=======================');
const setOfNumber = new Set(arrayNumber);
setOfNumber.forEach((value) => {
    console.log(value);
})
console.log('=================Travese map using forEach()=======================');

let map = new Map();
map.set(22,"Sachin");
map.set(11,"Dravid");
map.set(33,"Ganguly");
map.set(77,"Sachin");
map.forEach((key,value)=>{
    console.log(key, value);
});