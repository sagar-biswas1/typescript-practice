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


enum Role{

    ADMIN,READ_ONLY,AUTHOR
}


const student:{
name:string;
id:number;
class:number;
hobbies:string[];
//role:(string|number)[]
//role:[number,string]
role:number
}={
name:"oshan",
id:1,
class:10,
hobbies:['sports','travelling'],
//role:[2,'CM']
role:Role.ADMIN


}
//student.role[0]=34

console.log(student.name)
console.log(student.hobbies[1])
//console.log(student.role[1])

for (const element of student.hobbies) {
  console.log(element.toUpperCase());
}
