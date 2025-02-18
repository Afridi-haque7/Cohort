let fname1 = 'Hitesh'
let fname2 = fname1

console.log(fname1);    // 'Hitesh'
console.log(fname2);    // 'Hitesh'

fname2 = 'Piyush'

console.log(fname2);    // 'Piyush'



let p1 = {
    fname: 'Afridi'
}

let p2 = p1 // shallow copy - when originl and copied object points to same meomry location
// let p3 = {
//     ...p1   // shallow copy
// }
console.log(p1);

const p1String = JSON.stringify(p1);
console.log(p1String);
let p3 = JSON.parse(p1String)

p2.fname = 'Haque'

console.log(p2);
console.log(p1);
console.log(p3);

