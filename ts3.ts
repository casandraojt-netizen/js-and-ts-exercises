import { randomInt } from "crypto";

interface Todo {
    id: number;
    text: string;
    done: boolean;
    priority: "low" | "medium" | "high";
    createAt: string;
    completedAt: string | null;
    position: number;
}

interface CreateTodoInput {
    text: string;
    priority: "low" | "medium" | "high";
    done: boolean;
}

const createTodo = (input: CreateTodoInput): Todo => {
    return {
        id: Date.now(),
        text: input.text,
        done: input.done,
        priority: input.priority,
        createAt: new Date().toISOString(),
        completedAt: null,
        position: randomInt(1, 1000),
    };
}

const processTodos = (todos: Todo[]): { total: number; completed: number; remaining: number } => {
    const completedTodos = todos.filter(todo => todo.done);
    const totalTodos = todos.length;
    const completedCount = completedTodos.length;
    const remainingCount = totalTodos - completedCount;
    return {total: totalTodos,
            completed: completedCount,
            remaining: remainingCount,}
    ;
}

const updateTodoText = (todos: Todo[], id: number, newText: string): Todo[] => {
    return todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo);
}

const todos: Todo[] = [
    createTodo({ text: "Learn TypeScript", priority: "high", done: false }),
    createTodo({ text: "Build a project", priority: "medium", done: true }),
];

console.log(processTodos(todos));
console.log(updateTodoText(todos, todos[0].id, "Master TypeScript"));