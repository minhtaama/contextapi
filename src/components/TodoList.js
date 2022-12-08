import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import AddTodo from './AddTodo';

const TodoList = () => {
    const { lightTheme, darkTheme, isDarkTheme } = useContext(ThemeContext);
    const { todos, addNewTodo, removeTodo } = useContext(TodoContext);
    
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleRemoveEvent = (e) => {
        removeTodo(e.target.value);
    }

    return(
        <div style={{background: theme.background, color: theme.text}}>
            <ul>
                {todos.map(todo => {
                    return(
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={handleRemoveEvent} value={todo.id}>Remove</button>
                        </li>
                    )
                })}
            </ul>
            <AddTodo addNewTodo={addNewTodo}/>
        </div>
    )
}

export default TodoList;
