/* Nested objects: Objects inside of other Objects. Allows you
   to represent more complex data structures. 
   Child object is enlosed by a Parent object.
   Person{Address{}, ContactInfo{}}
   ShoppingCart{Keyboard{}, Monitor{}} */

const person = {
    fullName: "Gary Gabriel",
    age: 35,
    isStudent: false,
    hobbies: ["Basketball", "Cooking", "Fishing"],
    address: {
        street: "124 Bay Street",
        city: "Golden State",
        country: "United States of America"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address.street); //Access object in an object

for (const property in person.address){
    console.log(person.address[property]);
}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Nick", 22, "Barrio 22", "London", "UK");
const person2 = new Person("George", 29, "Madrigal", "Valencia", "Spain");

console.log(person1.address.city);