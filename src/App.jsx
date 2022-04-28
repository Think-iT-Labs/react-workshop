import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      name: "Learn react!",
      isCompleted: false,
    },
  ]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Creative TODO 📚</h1>
      <Form addTodo={addTodo} />
      <div className="todos">
        {todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              key={index}
              completeTodo={() => completeTodo(index)}
              removeTodo={() => removeTodo(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
