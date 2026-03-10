const my_name = 'Kent Casandra';
const age = 27;
let score = 0;

console.log(my_name);
console.log(age);
console.log(score);

score = 100;
console.log(score);

console.log(typeof my_name);
console.log(typeof age);
console.log(typeof score);

const sentence = `My name is ${my_name} and I am ${age} years old.`;
console.log(sentence);
if (age >= 18) {
    console.log('Adult.');
}
else {
    console.log('Minor.');
}

console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(typeof NaN);