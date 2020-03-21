import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class TodoInput extends React.Component {
  state = {
      value: '',
  }
  onChangeTextHandler = (text) => {
    this.setState({value: text})
  }
  render() {
    return (
      <View style={styles.InputContainer}>
        <TextInput
          value={this.state.value}
          onChangeText={this.onChangeTextHandler}
          placeholder="scrivi todo"
          style={styles.Input}
        />
        <Button title="invia" onPress={this.props.onAddTodo.bind(this, this.state.value)} />
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
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default TodoInput;
