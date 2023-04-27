const obj = {
    name: "User",
    age: 25,
    city: "Ahmedabad"
}
//1//   polyfill for the Object.entries
// console.log(Object.entries(obj)); //[ [ 'name', 'User' ], [ 'age', 25 ], [ 'city', 'Ahmedabad' ] ]

const aKeys = Object.keys(obj) //[ 'name', 'age', 'city' ]
const aValues = Object.values(obj) //[ 'User', 25, 'Ahmedabad' ]

const array = []
const array2 = []

for (let i = 0; i < aKeys.length; i++) {
    array.push([aKeys[i], aValues[i]])
}
for (let i = 0; i < aKeys.length; i++) {
    array2.push([aKeys[i], obj[aKeys[i]]]); // in this for loop we don't need aValues array
}

console.log(array);
console.log(array2);
//2//***************************************************** */

const array3 = []
const array4 = []
aKeys.forEach(key => {
    array3.push([key, obj[key]]);
});

aKeys.map(key => {
    array4.push([key, obj[key]]);
});

console.log(array3);
console.log(array4);

//3//************************************** */
function third(obj) {
    const array = [];
    for (const key in obj) {
        array.push([key, obj[key]]);
    }
    return array;
}
console.log(third(obj));

////////google

const google = function (obj) {
    let key = Object.keys(obj),
        i = key.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
        resArray[i] = [key[i], obj[key[i]]];

    return resArray;
}

console.log(google(obj));
