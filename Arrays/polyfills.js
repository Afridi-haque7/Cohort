// Polyfill =  When a function is not available for a
// given array or object, we need to create our own higher order function

// forEach Polyfill
if(!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (callback) {
        for(let i = 0; i < this.length; i++){
            callback(this[i], i);
        }
    };
}

// map Polyfill
if(!Array.prototype.myMap){
    Array.prototype.myMap = function (callback) {
        const result = [];
        for(let i = 0; i < this.length; i++){
            const value = callback(this[i], i);
            result.push(value)
        }
        return result;
    }
}

const arr = [1,2,3,4,5];

arr.myForEach((item, index) => {
    console.log(`Value: ${item}, index: ${index}`);  
});


const newArr = arr.myMap((m) => m*2)
console.log(newArr);
