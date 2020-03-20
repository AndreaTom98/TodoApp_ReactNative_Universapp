import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableWithoutFeedback} from "react-native";

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
      return
    }
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.concat({value: prevState.value, uid: Math.random().toString()})
      }
    })
    // this.setState({
    //   value: ""
    // })
  }
  render() {
    return (
      <View>
        <View style={styles.InputContainer}>
          <TextInput value={this.state.value} onChangeText={this.onChangeTextHandler} placeholder="scrivi todo" style={[styles.Input]} />
          <Button title="invia" onPress={this.addTodoHandler} />
        </View>
          <FlatList
          keyExtractor={item => item.uid}
          data={this.state.todoList}
          renderItem={item => (
            <TouchableWithoutFeedback onPress={() => console.warn('todo pressato')}>
              <View style={styles.Output}><Text style={styles.Todo}>{item.item.value}</Text></View>
            </TouchableWithoutFeedback>
          )} />
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
  },
  Output: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5,
  },
  Todo: {
    color: 'white',
  }
  
});
