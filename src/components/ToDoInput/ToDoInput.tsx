import React, { useState } from "react";
import { postToDo } from "../../Api/toDoApi";
import Button from "@ant-design/react-native/lib/button";

import {
  StyleSheet,
  View,
  TextInput,
  GestureResponderEvent,
} from "react-native";
interface Props {
  getToDos: () => void;
}

const ToDoInput = ({ getToDos }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const changeValue = (text: string) => setInputValue(text);

  const onBtnSubmit = (e: GestureResponderEvent) => {
    e.preventDefault();
    setInputValue(" ");

    const taskValue = { task: inputValue };

    postToDo(taskValue).then((data) => {
      console.log(data);
      getToDos();
    });
  };

  return (
    <View style={s.container}>
      <TextInput style={s.input} maxLength={60} onChangeText={changeValue} />
      <Button style={s.button} type="primary" onPressIn={onBtnSubmit}>
        Create new ToDo
      </Button>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: 400,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    backgroundColor: "white",
  },
  button: {
    marginTop: 15,
    width: 200,
    backgroundColor: "rgb(14, 115, 166)",
  },
});

export default ToDoInput;
