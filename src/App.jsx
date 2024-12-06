import { useState, useEffect } from "react";
import Hello from "./components/Hello"
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState ([]);
  useEffect( () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [] ;
    setTodos(storedTodos);
  }, []);

  const updateTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodo = (todoToDelete) => {
    const updatedTodos = todos.filter((todo) => todo !== todoToDelete);
    updateTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
    todo.id === id ? {...todo, isDone: !todo.isDone} : todo);
    updateTodos(updatedTodos);
  };
  
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo)
    );
  };

  return (
    <>
      <Hello />
      <InputTodo todos={todos} updateTodos={updateTodos} />
      <div>
      <TodoList todos={todos} updateTodos={updateTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
      </div>
    </>
  );
}

export default App;