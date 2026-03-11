const todo = [{ id: 1, text: "Learn JavaScript", done: false, priority: "high" },
{ id: 2, text: "Build a project", done: true, priority: "medium" },
{ id: 3, text: "Read a book", done: false, priority: "low" },
{ id: 4, text: "Exercise", done: true, priority: "high" },
{ id: 5, text: "Cook dinner", done: false, priority: "medium" }];

const todoText = todo.map(item => item.text);
console.log(todoText);

const incompleteTodos = todo.filter(item => !item.done);
console.log(incompleteTodos);

const highPriorityTodo = todo.find(item => item.priority === "high");
console.log(highPriorityTodo);

const doneTodoCount = todo.reduce((count, item) => item.done ? count + 1 : count, 0);
console.log(doneTodoCount);

const { id, text, done, priority } = todo[0];
console.log(id);
console.log(text);
console.log(done);
console.log(priority);

const todo1 = { id, text, done, priority };
const todo1updated = { ...todo1, done: true };

console.log(todo1);
console.log(todo1updated);

const updateTodo = (todos, id) => {
    return todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, done: !todo.done };
        }
        return todo;
    });
}

const updatedTodos = updateTodo(todo, 1);
console.log(updatedTodos);
