import {axiosInstance} from "./axiosIstance";

class TodoService {
  constructor() {
    this.baseUrl = "/todos";
  }

  async getAll() {
    const res = await axiosInstance.get(`${this.baseUrl}`);

    return res.data;
  }

  async getSingleUser(id) {
    const res = await axiosInstance.get(`${this.baseUrl}/user/${id}`);

    return res.data;
  }

  async delete(id) {
    const res = await axiosInstance.delete(`${this.baseUrl}/${id}`);

    return res.data;
  }

  async update(id, todo) {
    const res = await axiosInstance.put(`${this.baseUrl}/${id}`, todo);

    return res.data;
  }

  async create(newTodo) {
    const res = await axiosInstance.post(`${this.baseUrl}/add`, newTodo);

    return res.data;
  }
}

//SINGLETON PATTERN
export const ToDos = new TodoService();
