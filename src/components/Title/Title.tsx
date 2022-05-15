import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = () => (
  <View style={styles.container}>
    <Text style={styles.title}>ToDo App</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "whte",
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    padding: 5,
    marginBottom: 10,
    fontSize: 40,
    color: "#fff",
  },
});
export default Title;
