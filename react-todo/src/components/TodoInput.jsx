import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import './styles/TodoHeader.css';

const TodoInput = () => {
  const [todovalue, setTodoValue] = useState();
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const newTodos = [...todos, todovalue];
    setTodos(newTodos);
    persistData(newTodos);
    setTodoValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <div className="todo-container">
    <header className="todo-header">
      <input
        type="text"
        placeholder="Enter To-do here..."
        value={todovalue}
        className="todo-input"
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      ></input>
      <button type="submit" onClick={handleAddTodo}  className="todo-button">
        Add
      </button>
    </header>
    <div>
      <TodoList
      todos={todos}
      handleDeleteTodo={handleDeleteTodo}
      handleEditTodo={handleEditTodo}
    />
    </div>
    </div>
  );
};

export default TodoInput;
