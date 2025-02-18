// problem: craete an array containing different types of teas
const teas = ["Green Tea", "Red tea", "Masala Tea", "Elachi Tea", "Herbal Tea"];
// problem: Add "Chamomile Tea"
teas.push("Chamomile Tea")
// remove "Elachi Tea"
const index = teas.indexOf("Elachi Tea");
if(index > -1)  teas.splice(index, 1);

// problem: Filter the list of teas that are caffeniated
const caffeniatedTeas = teas.filter((tea) => tea !== "Herbal Tea")
// console.log(caffeniatedTeas);

// problem : sort the list of teas in alphabetical order
// console.log(teas.sort());

// problem: use a for loop to create a new array with all tea name in uppercase
const uppercaseTeas = [];
for(let i = 0; i < teas.length; i++){
    uppercaseTeas.push(teas[i].toUpperCase());
}
console.log(uppercaseTeas);


// console.log(teas);
