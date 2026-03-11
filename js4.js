const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const makeCounter = () => {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    }
}

const counter = makeCounter();

const fakeFetch = async (id) => {
    await wait(500);
    counter();
    if (id < 0) throw new Error("Invalid ID");
    return { id, text: `Todo ${id}`, done: false };
};

async function loadTodo(id) {
    try {
        const todo = await fakeFetch(id);
        console.log(todo);
    } catch (error) {
        console.error(error.message);
    }
}

loadTodo(1);
loadTodo(-1);

async function loadMany(ids) {
    const todos = await Promise.all(ids.map(id => fakeFetch(id)));
    console.log(todos);
}

loadMany([1, 2, -1, 3]);

async function loadSequential(ids) {
    const todo1 = await fakeFetch(ids[0]);
    const todo2 = await fakeFetch(ids[1]);
    const todo3 = await fakeFetch(ids[2]);
    console.log([todo1, todo2, todo3]);
}

loadSequential([1, 2, 3]);

async function loadSequential2(ids) {
    // Same as loadSequential but using Promise.all
    const [todo1, todo2, todo3] = await Promise.all(ids.map(fakeFetch));
    console.log([todo1, todo2, todo3]);
}

loadSequential2([1, 2, 3]);

Promise.allSettled([fakeFetch(1), fakeFetch(-1), fakeFetch(2)])
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log('Success:', result.value);
            } else {
                console.error('Error:', result.reason.message);
            }
        });
    });