import React, { Component } from "react";
import database from "firebase/database";
import firebase from "firebase";
import config from "../../config";

class ItemListings extends Component {
  state = {
    title: "",
    todoList: [],
  };

  componentDidMount = async () => {
    firebase.initializeApp(config);
    const todoRef = firebase.database().ref("Todo");

    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push(todos[id]);
      }
      console.log("TODO LIST", todoList);
      this.setState({ todoList: todoList });
    });
  };

  handleOnChange = (e: any) => {
    this.setState({ title: e.target.value });
  };

  create = () => {
    const todoRef = firebase.database().ref("Todo");

    const todo = {
      title: this.state.title,
      complete: false,
    };

    todoRef.push(todo);
  };

  render() {
    return (
      <div>
        <h1>MAIN COMPONENT</h1>
        <input
          type="text"
          onChange={this.handleOnChange}
          value={this.state.title}
        />
        <button onClick={this.create}>Add Todo </button>
      </div>
    );
  }
}

export default ItemListings;
