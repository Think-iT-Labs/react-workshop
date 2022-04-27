import React from "react";

function Todo({ todo,  completeTodo, removeTodo }) {
    return (
        <div className="todo">
            <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.name}</span>
            <button type="button" className="btn btn-complete" onClick={() => completeTodo()}>✅</button>
            <button type="button" className="btn btn-delete" onClick={() => removeTodo()}>❌</button>
        </div>
    )
}

export default Todo;