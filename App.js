import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends React.Component {
  state = {
    value: '',
    todoList: [],
  }
  onChangeTextHandler = (text) => {
    this.setState({value: text})
  }

  addTodoHandler = () => {
    if (this.state.value.trim() === "") {
      alert('Scrivi qualcosa')
    }
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.concat(prevState.value)
      }
    })
    this.setState({
      value: ""
    })
  }
  render() {
    const list = this.state.todoList.map(todo => {
      return <Text>{todo}</Text>
    })
    return (
      <View>
        <View style={styles.InputContainer}>
          {/* Input */}
          <TextInput value={this.state.value} onChangeText={this.onChangeTextHandler} placeholder="scrivi todo" style={[styles.Input]} />
          <Button title="invia" onPress={this.addTodoHandler} />
        </View>
        <View>
          {/* Output */}
          {list}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Input: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 3
  },
  InputContainer: {
    padding: 50,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center"
  }
});
