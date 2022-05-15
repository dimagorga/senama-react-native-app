import React, { useState } from "react";
import Title from "./src/components/Title/Title";

import { fetchToDos } from "./src/Api/toDoApi";
import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ToDoInput from "./src/components/ToDoInput/ToDoInput";
import ToDoList from "./src/components/TodoList/ToDoList";

type ToDo = {
  _id: string;
  task: string;
  isActive: boolean;
};

export default function App() {
  const [toDos, setToDos] = useState<ToDo[] | []>([]);

  const getToDos = () => {
    fetchToDos().then((data) => {
      setToDos(data.toDos);
      console.log(toDos);
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={s.container}>
        <Title />

        <ToDoInput getToDos={getToDos} />
        <ToDoList toDos={toDos} getToDos={getToDos} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#04abcb",
  },
});
