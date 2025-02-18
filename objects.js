const person = {
    firstName: "Afridi",
    lastName: "Haque",
    age: 22,
    languages: ["Bengali", "Hindi", "English"],
    hasGf: true,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    address: {
        hno: "50/13",
        street: "Sangmura Central Road",
        city: "Barasat",
        state: "WB",
        pin: 700125,
        age: 10,
        getAge: function(){
            return `${this.age}`;
        }
    },
}

// console.log(person.getFullName());
console.log(person.address.getAge());

