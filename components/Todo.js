import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";

const Todo = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.deleteTodo}>
      <View style={styles.Output}>
        <Text style={styles.Todo}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  Output: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 5
  },
  Todo: {
    color: "white"
  }
});

export default Todo;
