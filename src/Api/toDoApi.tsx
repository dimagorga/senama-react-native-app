import axios from "axios";

type ToDo = {
  _id: string;
  task: string;
  isActive: boolean;
};

type GetTodosResponse = {
  toDos: ToDo[];
};

axios.defaults.baseURL = "https://senamasoft-test.herokuapp.com/api";

export async function fetchToDos() {
  const { data } = await axios.get<GetTodosResponse>("/todo");
  return data;
}

export async function postToDo(toDo: object) {
  const { data } = await axios.post("/todo", toDo);
  return data;
}

export async function deleteToDo(toDoId: string) {
  const { data } = await axios.delete(`/todo/${toDoId}`);
  return data;
}

export async function changeStatusToDo(toDoId: string, toDoStatus: object) {
  const { data } = await axios.put(`/todo/${toDoId}`, toDoStatus);
  return data;
}
