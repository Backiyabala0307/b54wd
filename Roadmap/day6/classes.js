class student{
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getName() {
        return(`Name:${this.name}`);
    }
}

let student1 = new student('backiya', 'backiyabala0303', 7565);
//console.log(student1);
console.log(student1.getName());

