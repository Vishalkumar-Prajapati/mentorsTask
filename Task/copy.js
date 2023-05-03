const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer",
    x: { y: 2, z: 2 ,h:{v:5,f:{w:6}}},
    name: function () {
        console.log(this.name);
    }
}
let clone = JSON.parse(JSON.stringify(user)); //do not copy a function
clone.x.y = 'vishal';

const assignclone = Object.assign({}, user); //do not deep copy of nested objects 

assignclone.x.h="vishal"

const spread={...user}  //do not deep copy of nested objects 

spread.x.h="paresh";

console.log(user)
console.log(clone)
console.log(assignclone);

console.log(spread);

const arr=[1,2,3,4,5]
arr.forEach((d)=>d*2);

console.log(arr);