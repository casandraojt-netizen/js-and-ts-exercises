const username: string = "Kentcas";
const userId: number = 12345;
const isLoggedIn: boolean = true;
type  lastLogin =  string | null;


interface Todo {
    id: number;
    text: string;
    done: boolean;
    priority: "low" | "medium" | "high";
    createAt: string;
}

const todo1: Todo = {
    id: 1,
    text: "Learn TypeScript",
    done: false,
    priority: "high",
    createAt: "March 12, 2026",
};

const todo2: Todo = {
    id: 2,
    text: "Build a TypeScript project",
    done: true,
    priority: "medium",
    createAt: "March 12, 2026",
};

const todo3: Todo = {
    id: 3,
    text: "Deploy the TypeScript application",
    done: false,
    priority: "low",
    createAt: "March 12, 2026",
};

function formatTodo(todo: Todo): string {
    if (todo.done) {
        return `[X] ${todo.text} (${todo.priority}) (Created at: ${todo.createAt})`;
    }   
    else {
        return `[ ] ${todo.text} (${todo.priority}) (Created at: ${todo.createAt})`;
    }
}

console.log(formatTodo(todo1));
console.log(formatTodo(todo2));
console.log(formatTodo(todo3));

