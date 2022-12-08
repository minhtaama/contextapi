import React, { useState } from 'react';

const AddTodo = ({ addNewTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTodo(newTodo);
    }

    return(
        <form>
            <label htmlFor='newTodo'>Add New Todo</label>
            <input type='text' id='newTodo' onChange={handleInputChange} value={newTodo} />
            <button type='submit' onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default AddTodo;