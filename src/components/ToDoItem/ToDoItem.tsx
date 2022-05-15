import { changeStatusToDo } from "../../Api/toDoApi";
import Button from "@ant-design/react-native/lib/button";
import { AntDesign } from "@expo/vector-icons";

import {
  StyleSheet,
  View,
  Text,
  GestureResponderEvent,
  Switch,
} from "react-native";

interface ToDo {
  id: string;
  task: string;
  isActive: boolean;
  onDelete: (id: string) => void;
  getAllToDos: () => void;
}

const ToDoItem = ({ id, isActive, task, onDelete, getAllToDos }: ToDo) => {
  const changeStatus = (isActive: boolean) => {
    console.log(id);

    changeStatusToDo(id, { isActive: !isActive }).then(() => {
      getAllToDos();
    });
  };

  return (
    <View key={id} style={styles.listItem}>
      <Switch
        trackColor={{ false: "#767577", true: "#0e73a6" }}
        thumbColor={!isActive ? "#04abcb" : "#04abcb"}
        ios_backgroundColor="#013389"
        onValueChange={() => changeStatus(isActive)}
        value={!isActive}
      />
      <Text style={isActive ? styles.task : styles.taskDone}>{task}</Text>
      <Button
        style={styles.button}
        type="ghost"
        key={id}
        onPress={(e: GestureResponderEvent) => onDelete(id)}
        size="small"
      >
        <AntDesign name="delete" size={18} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 320,
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    left: 5,
  },
  button: {
    height: "auto",
    paddingTop: 5,
    paddingBottom: 5,

    paddingLeft: 10,
    paddingRight: 10,
  },
  task: {
    fontSize: 18,
    width: 190,
    textAlign: "center",
  },
  taskDone: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "#8c8c8c",
  },
});

export default ToDoItem;
