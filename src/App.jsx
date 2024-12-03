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

  return (
    <>
      <Hello />
      <InputTodo todos={todos} updateTodos={updateTodos} />
      <div>
      <TodoList todos={todos} updateTodos={updateTodos} />
      </div>
    </>
  );
}

export default App;