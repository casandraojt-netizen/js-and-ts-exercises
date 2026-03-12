interface Todo1 {
    id: number;
    text: string;
    done: boolean;
    priority: "low" | "medium" | "high";
    createAt: string;
    completedAt: string | null;
}

const addTodo = (todos: Todo1[], text: string): Todo1[] => {
    const id = todos.length + 1;
    const newTodo: Todo1 = {
        id,
        text,
        done: false,
        priority: "medium",
        createAt: Date.now().toString(),
        completedAt: null,
    };
    return [...todos, newTodo];
}

const toggleTodo = (todos: Todo1[], id: number): Todo1[] => {
    return todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done, completedAt: todo.done ? null : new Date().toISOString() } : todo
    );
}


const filterbyPriority = (todos: Todo1[], priority: "low" | "medium" | "high"): Todo1[] => {
    return todos.filter(todo => todo.priority === priority);
}

const completeTodo = (todos: Todo1[], id: number): Todo1[] => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.done = true;
        todo.completedAt = Date.now().toString();
    }
    return todos;
}

const getById = <T extends { id: number }>(array: T[], id: number): T | null => {
    return array.find(item => item.id === id) ?? null;
}