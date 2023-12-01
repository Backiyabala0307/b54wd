
// //function prototype
// function person(name) {
//     this.name = name;
// }

// let person1 = new person('backiya');
// //console.log(person1.name);

function person(name) {
    this.name = name;
    this.greet = function () {
        console.log(`${this.name}`);
    }
}

let person1 = new person('backiya');
person1.greet();
