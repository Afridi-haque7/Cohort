class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}

const p1 = new Person('Piyush', 'Garg')
const p2 = new Person('Hitesh', 'Choudhary')

console.log(p2.getFullName());
