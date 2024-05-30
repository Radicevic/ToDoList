const url = 'https://dummyjson.com/todos';

export async function fetchTodoList () {
    const res = await fetch(url);

    return await res.json();
}
