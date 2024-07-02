class TodoService {
  constructor() {
   this.baseUrl = "https://dummyjson.com/todos";
  }

  async getAll() {
    const res = await fetch(this.baseUrl);

    return await res.json();
  }

  async delete(id) {
    const res = await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });

    return await res.json();
  }

  async update(id, todo) {
    const res = await fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' },
    });

    return await res.json();
  }

  async create(newTodo){
    const res = await fetch(`${this.baseUrl}/add`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { 'Content-Type': 'application/json' },
    });

    return await res.json();
  }
}

//SINGLETON PATTERN
export const ToDos =  new TodoService();
