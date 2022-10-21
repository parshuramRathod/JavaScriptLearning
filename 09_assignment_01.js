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
console.log("====================================3========================================");
function traverseObject(collageNme) {
    const collage ={
        collegeName:'Walchand',
        city:'Solapur',
        totalCourses:'7'

    }
    for (const key in collage) {
        if (Object.hasOwnProperty.call(collage, key)) {
            const element = collage[key];
            console.log(`${key},${element}`);
        }
    }
    
}
traverseObject();

