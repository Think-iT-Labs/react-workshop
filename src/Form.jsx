import React, { useState} from "react";

function Form({ addTodo }) {

    const [value, setValue] =  useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!value) return;
    
        addTodo({name: value, isCompleted: false});
        setValue("");
      };
    
    const handleChange = (event) =>{
        setValue(event.target.value)
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="What do you want to do ?" 
                autoFocus
                value={value}
                onChange={handleChange}
                />
                <button>Add</button>
        </form>
        </div>
    )
}

export default Form;