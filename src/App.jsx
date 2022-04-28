import React, { useState, useEffect } from "react";
import Form from "./Form";
import Todo from "./Todo";

import "./App.css";

const persistState = (state) => {
  localStorage.setItem("todos", JSON.stringify(state));
};

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    const defaultTodos = [
      {
        name: "Learn react!",
        isCompleted: false,
      },
    ];
    setTodos(savedTodos ? JSON.parse(savedTodos) : defaultTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    persistState(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    persistState(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    persistState(newTodos);
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
