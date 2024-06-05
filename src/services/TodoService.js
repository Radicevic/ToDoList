const url = "https://dummyjson.com/todos/user/13";

export async function fetchTodoList() {
  const res = await fetch(url);

  return await res.json();
}
