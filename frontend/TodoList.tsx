import React, { useState, useEffect } from "react";

interface Todo {
  id: string;
  title: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
