console.log("hello");

const input1 = document.getElementById("inputOne")! as HTMLInputElement;
const input2 = document.getElementById("inputTwo")! as HTMLInputElement;

const addButton = document.getElementById("add-button") as HTMLButtonElement;
function add(a:number, b:number,showResult:boolean,phrase:string) {

if(showResult) return `${phrase} ${a+b}`
}

addButton.addEventListener("click", function() {
  console.log(add(+input1.value , + input2.value,true,"Your result is-"));
});

let number1=5
let number2=6
let number3:number;


const total=add(number1,number2,true,"Your result is-")

console.log(total)



const student:{
name:string;
id:number;
class:number;
hobbies:string[]
}={
name:"oshan",
id:1,
class:10,
hobbies:['sports','travelling']
}


console.log(student.name)

for (const element of student.hobbies) {
  console.log(element.toUpperCase());
}
