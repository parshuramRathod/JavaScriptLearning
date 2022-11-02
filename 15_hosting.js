console.log(myName);//this will log before variable declaration because it will used var keyword
// console.log(rollNo); this is not log because it is declared using let keyword
// console.log(pinCode); this is not log because it is declared using const keyword

var myName = "Mohit Sharma";
let rollNo = "123";
const pinCode = "410002";


show() // this will log 
function show() {
    console.log("Show Functoion");
}

// showFunction() this will not log because this is function expression
var showFuction = function () {
    console.log("show function");
    
}