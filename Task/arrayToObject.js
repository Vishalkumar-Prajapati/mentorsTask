const arr = [["Apple", "Sweet"], ["Book", "Self-Help"], ["Bus", "Trip"]]

//polyfill for the Object.fromEntries
// //console.log(Object.fromEntries(arr));
function for_of(arr) {
    const object = {};
    for (const [key, value] of arr) {
        object[key] = value;
    }
    // for (const index in arr) {
    //     const [key, value] = arr[index];
    //     object[key] = value;
    // }
    return object;
}
console.log('function1 ::' ,for_of(arr));

//2*******************************************************************************************/
function for_Each(arr) {
    const object = {}

    arr.forEach(([key, value]) => {
        object[key] = value
    });
    // arr.map(([key,value])=>{
    //     object[key]=value
    // });

   return object
}

console.log('function2 ::',for_Each(arr));
//3//**************************************************************************** */
function for_(arr) {
    const object = {};
    for (let i=0; i<arr.length; i++){
        const [key, value] = arr[i];
        object[key] = value;
    }
    return object;
}
console.log("function3",for_(arr))


function reduce(arr){
    return arr.reduce((acc,current)=>{
        const [key, value]=current;
        acc[key]=value;
        return acc;
    },{})
}

console.log("function4",reduce(arr))


