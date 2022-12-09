/*Завдання №1*/ 
let ignore = 'You can ignore single and double quotes like this: \\\'\\\' \\\" \\\"';
console.log(ignore);

/*Завдання №2*/
let Data = 'Please enter your data';
alert(Data);
let Name = prompt("Enter your name", 'Name')
alert(`Your name is: ${Name}`);
let Surname = prompt("Enter your surname", 'Surname')
alert(`Your full name is: ${Name} ${Surname}`);
let Age = prompt("How old are you?", 'Age')
alert(`Your full name is: ${Name} ${Surname}, your age is: ${Age}`);
let Admin = confirm('Are you admin?')
alert(`Your full name is: ${Name} ${Surname}, your age is: ${Age}, admin status: ${Admin}`);

/*Завдання №3*/
console.log(typeof alert()); //alert() = undefined
console.log(Boolean(alert('5'))); //undefined = false

let a = Number(true);//true = 1
let b = Number(false);//false = 0
console.log(a, b);
console.log(true > false);//(1 > 0) = true

console.log(true > 5);//(1 > 5) = false

let c = Number('5');//'5' = 5
console.log(c);
console.log(true < '5');//(1 < 5) = true

let d = Number(null);//null = 0
console.log(d);
console.log(true > null);//(1 > 0) = true