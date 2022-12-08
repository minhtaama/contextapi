import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {text: "first todo motherfucker", id: 0},
        {text: "second todo motherfucker", id: 1},
        {text: "third todo motherfucker", id: 2},
    ]);

    const addNewTodo = (newTodo) => {
        setTodos([
            ...todos,
            {text: newTodo, id: todos.length}
        ])
        console.log(todos);
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((el, ind, arr) => {
            if(el.id != id) {
                return el;
            }
        }))
    }

    return(
        <TodoContext.Provider value={{ todos, addNewTodo, removeTodo }}>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;