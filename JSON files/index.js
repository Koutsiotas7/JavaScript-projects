/* JSON (JavaScript Object Notation) data-interchange format
   used for exchanging data between a server and a web application.
   JSON files {key:value} OR [value1, value2, value3]

   JSON.stringify(): Converts a JS object to a JSON string.
   JSON.parse(): Converts a JSON string to a JS object. */

const names = ["Spongebob", "Patrick", "Squidward", "Sandy", "Eugene"];
const person = {
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies":["Jellyfishing", "Karate"]
};

const people = [{
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name":"Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name":"Squidward",
    "age": 39,
    "isEmployed": true
},
{
    "name":"Sandy",
    "age": 29,
    "isEmployed": false
},
{
    "name":"Eugene",
    "age": 45,
    "isEmployed": true
}];

const jsonString = JSON.stringify(names);
console.log(jsonString);
console.log(names);

const jsonString2 = JSON.stringify(person);
console.log(jsonString2);
console.log(person);

const jsonString3 = JSON.stringify(people);
console.log(jsonString3);
console.log(people);

const stringNames = `["Spongebob", "Patrick", "Squidward", "Sandy", "Eugene"]`;

const stringPerson = `{
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies":["Jellyfishing", "Karate"]
}`;

const stringPeople = `[{
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name":"Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name":"Squidward",
    "age": 39,
    "isEmployed": true
},
{
    "name":"Sandy",
    "age": 29,
    "isEmployed": false
},
{
    "name":"Eugene",
    "age": 45,
    "isEmployed": true
}]`;

const parsedNames = JSON.parse(stringNames);
console.log(parsedNames); //JS object

const parsedperson = JSON.parse(stringPerson);
console.log(parsedNames); //JS object

const parsedPeople = JSON.parse(stringPeople);
console.log(parsedNames); //JS object

console.log("Fetch examples are following...");
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));

