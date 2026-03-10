function multiply(a, b) {
    return a * b;
}

const multiply1 = (a, b) => { 
    return a * b; 
};
const multiply2 = (a, b) => a * b;

console.log(multiply(2, 3));
console.log(multiply1(2, 3));
console.log(multiply2(2, 3));


const greetUser = (name, greeting = 'Hello') => {
    return `${greeting}, ${name}!`;
}

console.log(greetUser('Alice'));
console.log(greetUser('Bob', 'Salutations!'));

const isEven = num => num % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));

const runIf = (condition, func1) => {
    if (condition) {
        func1();
    }
}

runIf(true, () => console.log('Condition is true!'));
runIf(false, () => console.log('This will not be logged.'));

const makeCounter = () => {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    }
}

const counter = makeCounter();
counter();
counter();
counter();