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
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="What do you want to do ?" 
                autoFocus
                value={value}
                onChange={handleChange}
                />
                <button className="btn">Add</button>
        </form>
    )
}

export default Form;