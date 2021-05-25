console.log("hello");
var input1 = document.getElementById("inputOne");
var input2 = document.getElementById("inputTwo");
var addButton = document.getElementById("add-button");
function add(a, b, showResult, phrase) {
    if (showResult)
        return phrase + " " + (a + b);
}
addButton.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value, true, "Your result is-"));
});
var number1 = 5;
var number2 = 6;
var number3;
var total = add(number1, number2, true, "Your result is-");
console.log(total);
var student = {
    name: "oshan",
    id: 1,
    "class": 10,
    hobbies: ['sports', 'travelling']
};
console.log(student.name);
for (var _i = 0, _a = student.hobbies; _i < _a.length; _i++) {
    var element = _a[_i];
    console.log(element.toUpperCase());
}
