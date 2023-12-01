//student details

function student(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;

    this.sayHello = function () {
        console.log(`Hello! Welcome ${this.name}`);
    }
    this.getDetails = function () {
        console.log(`Name:${this.name},Email:${this.email},Phone:${this.phone}`);
    }
    this.getEmail = function () {
        console.log(`Email:${this.email}`);
    }
    this.getPhone = function () {
        console.log(`Phone:${this.phone}`);
    }
}

let students = [];

let student1= new student("backiya", "backiya0303", 12345);
let student2 = new student("backiya", "backiya0303", 123456);
let student3 = new student("backiya", "backiya0303", 123457);
students.push(student1, student2, student3);
for (let i of students) {
    i.sayHello();
    i.getDetails();
    i.getEmail();
    i.getPhone();
}
// student1.sayHello();
// student1.getDetails();
// student1.getEmail();
// student1.getPhone();