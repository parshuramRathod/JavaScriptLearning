console.log(`This comparing whether LHS is same as RHS and at RHS side it did implicit conversion so output is : ${0 == ''}`);
console.log(`(0=='0') 0 means false so false=false output is true  : ${0 == '0'}`);
console.log(`(0==false) This is also false=false answer is true  : ${0 == false} `);
console.log(null == undefined);
console.log(`(1==[1]) This is true=true answer is true : ${1 == [1]}`);
console.log(`(1==true) This is true=true answer is true : ${1 == true}`);
console.log(`(1=='1') It did implicit conversion so output is : ${1 == '1'}`);
console.log('==============================================================');
var greatestNo = function (a, b, c) {
    var largeNo = a > b ? a : b  ; b > c ? b : c ;  a > c ? a : c;
    console.log(`In These No.(100, 101, 99) Greatest no is : ${largeNo}`);
}
greatestNo(100, 101, 99);
