class Vehicle {
    constructor(company, bikeName, engine, average) {
        this.company = company;
        this.bikeName = bikeName;
        this.engine = engine;
        this.average = average;
    }
}
let bullet = new Vehicle('Royal Enfield', 'Bullet', '350cc', '40kmpl');
let unicorn = new Vehicle('Honda', 'Unicorn', '150cc', '50kmpl');
let fz = new Vehicle('Yamaha', 'FZ', '250cc', '45kmpl');
let pulsar = new Vehicle('Bajaj', 'Pulsar', '220cc',);
let xtreme = new Vehicle('Hero', 'xtreme', '200cc', '40kmpl');
console.log(bullet);
console.log(unicorn);
console.log(fz);
console.log(pulsar);
console.log(xtreme);

console.log("====================================2========================================");
class College {
    constructor(collegeName, city, totalCourses) {
        this.collegeName = collegeName;
        this.city = city;
        this.totalCourses = totalCourses;
    }

}
let walchand = new College('Walchand', 'Solaur', '7');
let vvpiet = new College('VVPIET', 'Solapur', '8');
let coep = new College('COEP', 'Pune', '7');
let dypatail = new College('DY Patil', 'Kolhapur', '9');
console.log(walchand);
console.log(vvpiet);
console.log(coep);
console.log(dypatail);
console.log("====================================3 traverse ========================================");
function traverseObject(collageNme) {
    const walchand = {
        collegeName: 'Walchand',
        city: 'Solapur',
        totalCourses: '7'
    }
    for (const key in walchand) {
        if (Object.hasOwnProperty.call(walchand, key)) {
            const element = walchand[key];
            console.log(`${key}, ${element}`);
        }
    }
    const VVPIET = {
        collegeName: 'VVPIET',
        city: 'Solapur',
        totalCourses: '8'
    }
    for (const key in VVPIET) {
        if (Object.hasOwnProperty.call(VVPIET, key)) {
            const element = VVPIET[key];
            console.log(`${key}, ${element}`);
        }
    }
    const coep = {
        collegeName: 'COEP',
        city: 'Pune',
        totalCourses: '7'
    }
    for (const key in coep) {
        if (Object.hasOwnProperty.call(coep, key)) {
            const element = coep[key];
            console.log(`${key}, ${element}`);
        }
    }
    const dypatail = {
        collegeName: 'DY PATIL',
        city: 'Pune',
        totalCourses: '9'
    }
    for (const key in dypatail) {
        if (Object.hasOwnProperty.call(dypatail, key)) {
            const element = dypatail[key];
            console.log(`${key}, ${element}`);
        }
    }


}
traverseObject();
console.log("=========================fibonacci series====================");

let fibonacci = function (mynum) {
    let firstNum = 0; secNum = 1; nextNum = firstNum + secNum;  
    for (let index = 0; index < mynum; index++) {
         firstNum = secNum;
         secNum = nextNum;
         nextNum = firstNum + secNum;
       
        console.log(nextNum);
    }
}


fibonacci(7);
