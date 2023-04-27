const obj = {
    Do: "I",
    JS: "know",
    NodeJs: "and"
}
//1 //swap the key  to value and vice versa

function first(obj) {
    const aKeys = Object.keys(obj);
    const aValues = Object.values(obj);
    const oObj = {}

    for (let i = 0; i < aKeys.length; i++) {
        oObj[aValues[i]] = aKeys[i];
    }
    return oObj
}

console.log(first(obj));//{ I: 'Do', know: 'JS', and: 'NodeJs' }
//*************************************** */

//2
function second(obj) {
    const arrObj = Object.entries(obj);
    arrObj.forEach(innerArray => {
        innerArray.reverse();
    });
    return Object.fromEntries(arrObj);
}
console.log(second(obj));//{ I: 'Do', know: 'JS', and: 'NodeJs' }
///***************************************************** */
//3.

function third(obj) {
    const oObj3 = {}
    for (const key in obj) {
        oObj3[obj[key]] = key;
    }
    return oObj3
}
console.log(third(obj));//{ I: 'Do', know: 'JS', and: 'NodeJs' }


