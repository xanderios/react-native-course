import React, { createContext, useContext, useState, ReactNode } from "react";

import { TodoItem } from "src/types/index";
import todosMock from "src/mocks/todos";

type TodosContextType = {
  todosModal: boolean;
  openTodosModal: () => void;
  closeTodosModal: () => void;
  todos: TodoItem[];
  addTodo: () => void;
  completeTodo: (id: number) => void;
  updateTodo: (updatedTodo: TodoItem) => void;
  todoTitleInput: string;
  handleTodoTitleInput: (text: string) => void;
  todoDescriptionInput: string;
  handleTodoDescriptionInput: (text: string) => void;
};

export const TodosContext = createContext<TodosContextType>({
  todosModal: false,
  openTodosModal: () => {},
  closeTodosModal: () => {},
  todos: [],
  addTodo: () => {},
  completeTodo: () => {},
  updateTodo: () => {},
  todoTitleInput: "",
  handleTodoTitleInput: () => {},
  todoDescriptionInput: "",
  handleTodoDescriptionInput: () => {},
});

export const TodosProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todosModal, setShowModal] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoItem[]>(todosMock);
  const [todoTitleInput, setTodoInput] = useState<string>("");
  const [todoDescriptionInput, setTodoDescriptionInput] = useState<string>("");

  function openTodosModal() {
    setShowModal(true);
  }

  function closeTodosModal() {
    setShowModal(false);
  }

  function handleTodoTitleInput(text: string) {
    setTodoInput(text);
  }

  function handleTodoDescriptionInput(text: string) {
    setTodoDescriptionInput(text);
  }

  function addTodo() {
    const todo: TodoItem = {
      title: todoTitleInput,
      description: todoDescriptionInput || undefined,
      dateCreated: new Date().toLocaleDateString(),
      id: Math.floor(Math.random() * (999 - 1 + 1) + 1),
    };

    setTodos((todos) => [...todos, todo]);
    handleTodoTitleInput("");
    handleTodoDescriptionInput("");
    closeTodosModal();
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
        todosModal,
        openTodosModal,
        closeTodosModal,
        todos,
        addTodo,
        completeTodo,
        updateTodo,
        todoTitleInput,
        handleTodoTitleInput,
        todoDescriptionInput,
        handleTodoDescriptionInput,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
