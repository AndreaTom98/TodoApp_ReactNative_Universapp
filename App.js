import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableWithoutFeedback} from "react-native";
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';

export default class App extends React.Component {
  state = {
    todoList: [],
  }
  deleteTodoHandler = (id) => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    })
  }
  addTodoHandler = (value) => {
    if (value.trim() === "") {
      alert('Scrivi qualcosa')
      return
    }
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.concat({value: value, id: Math.random().toString()})
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
          data={this.state.todoList}
          renderItem={item => <Todo deleteTodo={() => this.deleteTodoHandler(item.item.id)} title={item.item.value} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
