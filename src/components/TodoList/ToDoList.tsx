import ToDoItem from "../ToDoItem/ToDoItem";
import { deleteToDo } from "../../Api/toDoApi";
import { useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Text,
  GestureResponderEvent,
} from "react-native";

type ToDo = {
  _id: string;
  task: string;
  isActive: boolean;
};

interface Props {
  toDos: ToDo[];
  getToDos: () => void;
}

const ToDoList = ({ toDos, getToDos }: Props) => {
  useEffect(() => {
    getToDos();
  }, []);

  const onDelClick = (id: string) => {
    console.log(id);
    console.log(123123123);

    deleteToDo(id).then((data) => {
      console.log(data);
      getToDos();
    });
  };

  return (
    <View style={styles.list}>
      {toDos.map((item) => (
        <ToDoItem
          key={item._id}
          id={item._id}
          isActive={item.isActive}
          task={item.task}
          onDelete={onDelClick}
          getAllToDos={getToDos}
        />
      ))}
      {/* <FlatList
        scrollEnabled
        data={toDos}
        renderItem={({ item }) => (
          <ToDoItem
            key={item._id}
            id={item._id}
            isActive={item.isActive}
            task={item.task}
            onDelete={onDelClick}
            getAllToDos={getToDos}
          />
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ToDoList;
