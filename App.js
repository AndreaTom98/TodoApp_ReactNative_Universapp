import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableWithoutFeedback} from "react-native";
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';

export default class App extends React.Component {
  state = {
    todoList: [],
  }
  addTodoHandler = (value) => {
    if (value.trim() === "") {
      alert('Scrivi qualcosa')
      return
    }
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.concat({value: value, uid: Math.random().toString()})
      }
    })
    // this.setState({
    //   value: ""
    // })
  }
  render() {
    return (
      <View>
          <TodoInput onAddTodo={this.addTodoHandler} />
          <FlatList
          keyExtractor={item => item.uid}
          data={this.state.todoList}
          renderItem={item => <Todo title={item.item.value} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
