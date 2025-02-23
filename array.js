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
// console.log(uppercaseTeas);


// console.log(teas);


// study array methods
// 1. slice()
// 2. splice()
// 3. shift()
// 4. unshift()
// 5. sort()
// 6. map()


// ************************************************************************
// 7. reduce()

const arr = [1,2,3,4]

// find sum
const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

let userActivity = [
    {user: 'A', activity: 45},
    {user: 'B', activity: 73},
    {user: 'C', activity: 33},
];

// find most active user using reduce

let mostActiveUser = userActivity.reduce((maxUser, user) => maxUser.activity < user.activity ? user : maxUser)
console.log(mostActiveUser);

// ****************************************************************************
// 8. forEach()
// 9. filter()

let inventory = [
    {name: 'A', stock: 30},
    {name: 'B', stock: 100},
    {name: 'C', stock: 80},
    {name: 'D', stock: 45}
];

let lowStocks = inventory.filter((item) => item.stock <= 50)
// console.log(lowStocks);

// 10. concat()
// 11. spread operator *****
