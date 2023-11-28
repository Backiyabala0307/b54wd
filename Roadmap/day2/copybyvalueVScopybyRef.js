//copy by value
let a = 1;
let b = a;
console.log(a, b);
a = 2;
console.log(a, b);


//copy by reference

//example1
let m= [];
let n = m;
console.log(m, n);

m.push(1);
console.log(m, n);


//example2
let person = {
    name: "john",
    age:25
};

let person2 = person;
console.log(person, person2);

person.age = 30;

console.log(person, person2);