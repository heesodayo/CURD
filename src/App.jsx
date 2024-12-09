import { useState, useEffect } from "react";
import Hello from "./components/Hello"
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import { ToastContainer } from 'react-toastify';  // 추가
import 'react-toastify/dist/ReactToastify.css';   // 추가
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <ToastContainer
        position="top-right"
        autoClose={1000}       // 1초 후 자동 닫힘
        hideProgressBar={false} // 진행 바 표시
        newestOnTop={true}      // 새로운 알림이 위에 표시
        closeOnClick={true}     // 클릭 시 닫힘
        draggable={true}        // 드래그로 닫기 가능
        pauseOnHover={true}     // 마우스를 올리면 닫히지 않음 
        />
      <Hello />
      <InputTodo todos={todos} updateTodos={updateTodos} />
      <div>
      <TodoList todos={todos} updateTodos={updateTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
      </div>
    </>
  );
}

export default App;