import {clamp, capitalize, VERSION} from "./helpers.js";

const c1 = clamp(5, 0, 10);
const c2 = clamp(-5, 0, 10);
const c3 = clamp(15, 0, 10);

console.log(c1);
console.log(c2);
console.log(c3);   

const cap1 = capitalize("hello world");
const cap2 = capitalize("");

console.log(cap1);
console.log(cap2);

console.log(VERSION);

const user = {
    profile: {
        settings: {
            theme: "dark"
        }
    }
};

console.log(user?.profile?.settings?.theme);
console.log(user?.profile?.missing?.theme);

const getDisplayNameUser = (user) => {
    return user?.profile?.displayName ?? "Anonymous";
}

const display = getDisplayNameUser(user);
console.log(display);

let score = 0 ?? 100;
console.log(score);

score = 0 || 100;
console.log(score);

const todos = [];

const todo = [{ id: 1, text: "Learn JavaScript", done: false, priority: "high" },
{ id: 2, text: "Build a project", done: true, priority: "medium" },
{ id: 3, text: "Read a book", done: false, priority: "low" },
{ id: 4, text: "Exercise", done: true, priority: "high" },
{ id: 5, text: "Cook dinner", done: false, priority: "medium" }];

const emptyTodo = todo.length === 0 ? "No todos" : `You have ${todo.length} todos`;
console.log(emptyTodo);

const emptyTodos = todos.length === 0 ? "No todos" : `You have ${todos.length} todos`;
console.log(emptyTodos);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );

console.log(range(1, 11, 1));