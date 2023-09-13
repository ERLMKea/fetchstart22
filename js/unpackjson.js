// Example object
const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
};


// Accessing the first property
const firstProperty = Object.keys(obj)[0];
console.log(firstProperty)

const keys = Object.keys(obj)
console.log(keys)
keys.forEach(key => console.log(obj[key]))

console.log(typeof keys)