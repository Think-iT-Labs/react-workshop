import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className="todo">
            <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.name}</span>
            <button type="button" onClick={() => completeTodo(index)}>✅</button>
            <button type="button"  onClick={() => removeTodo(index)}>❌</button>
        </div>
    )
}

export default Todo;