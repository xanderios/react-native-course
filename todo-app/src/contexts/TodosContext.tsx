import { createContext, useContext, useState, ReactNode } from "react";

import { TodoItem } from "../types";

type TodosContextType = {
  todos: TodoItem[];
  addTodo: () => void;
  completeTodo: (id: number) => void;
  updateTodo: (updatedTodo: TodoItem) => void;
  todoInput: string;
  handleTodoInput: (text: string) => void;
};

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  completeTodo: () => {},
  updateTodo: () => {},
  todoInput: "",
  handleTodoInput: () => {},
});

export const TodosProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");

  function handleTodoInput(text: string) {
    setTodoInput(text);
  }

  function addTodo() {
    console.log(todoInput);
    const todo: TodoItem = {
      title: todoInput,
      dateCreated: new Date().toLocaleDateString(),
      id: Math.floor(Math.random() * (999 - 1 + 1) + 1),
    };

    setTodos((todos) => [...todos, todo]);
    setTodoInput("");
  }

  const completeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo: TodoItem) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        completeTodo,
        updateTodo,
        todoInput,
        handleTodoInput,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
