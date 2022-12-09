"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*Завдання №1*/
var ignore = 'You can ignore single and double quotes like this: \\\'\\\' \\\" \\\"';
console.log(ignore);
/*Завдання №2*/

var Data = 'Please enter your data';
alert(Data);
var Name = prompt("Enter your name", 'Name');
alert("Your name is: ".concat(Name));
var Surname = prompt("Enter your surname", 'Surname');
alert("Your full name is: ".concat(Name, " ").concat(Surname));
var Age = prompt("How old are you?", 'Age');
alert("Your full name is: ".concat(Name, " ").concat(Surname, ", your age is: ").concat(Age));
var Admin = confirm('Are you admin?');
alert("Your full name is: ".concat(Name, " ").concat(Surname, ", your age is: ").concat(Age, ", admin status: ").concat(Admin));
/*Завдання №3*/

console.log(_typeof(alert())); //alert() = undefined

console.log(Boolean(alert('5'))); //undefined = false

var a = Number(true); //true = 1

var b = Number(false); //false = 0

console.log(a, b);
console.log(true > false); //(1 > 0) = true

console.log(true > 5); //(1 > 5) = false

var c = Number('5'); //'5' = 5

console.log(c);
console.log(true < '5'); //(1 < 5) = true

var d = Number(null); //null = 0

console.log(d);
console.log(true > null); //(1 > 0) = true