let varible_name = "";
let objectSachin = {
    fullName: "Sachin Tendularkar",
    city: "Mumbai",
    age: 43,
    isMarried: true,
    address: {
        street: "AS CLUB",
        pincode: 123456,
        city: "Pune",
        state: "MH"
    },
    eat: function () {
        console.log("I am Non Vegeterian");
    },
    details: function () {
        let objectdetails = `Details are : ${this.fullName},${this.age},${this.address.city}`
        return objectdetails;
    }
}
let Objecttdetails = objectSachin.details();
console.log(Objecttdetails);
console.log(typeof objectSachin);
console.log(objectSachin.address);
console.log(objectSachin.address.state);
objectSachin.address.city; landmark = "Near Mall"//we add landmark like this
objectSachin.eat();
objectSachin.age = 47;// we can update object like this
objectSachin.pincode = 123456;
delete objectSachin.isMarried;// it can delete property
objectSachin.proffesion = 'cricketer'

console.table(objectSachin);
console.log(objectSachin);
let sachinFullName = objectSachin.fullName;
console.log(sachinFullName);
//or
console.log(objectSachin.fullName);
console.log(objectSachin.city);
console.log(objectSachin["age"]);

console.log(Object.entries(objectSachin));
console.log(Object.keys(objectSachin));
console.log(Object.values(objectSachin));
