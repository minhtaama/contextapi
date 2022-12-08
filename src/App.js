import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <TodoContextProvider>
          <TodoList/>
        </TodoContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
