import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { generateUniqueId, getStorageData, setStorageData } from "src/utils";
import { TodoItem } from "src/types/index";

type TodosContextType = {
  showTodosModal: boolean;
  openTodosModal: () => void;
  closeTodosModal: () => void;
  showHistoryModal: boolean;
  openHistoryModal: () => void;
  closeHistoryModal: () => void;
  todos: TodoItem[];
  addTodo: () => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  updateTodo: (updatedTodo: TodoItem) => void;
  todoTitleInput: string;
  handleTodoTitleInput: (text: string) => void;
  todoDescriptionInput: string;
  handleTodoDescriptionInput: (text: string) => void;
};

export const TodosContext = createContext<TodosContextType>({
  showTodosModal: false,
  openTodosModal: () => {},
  closeTodosModal: () => {},
  showHistoryModal: false,
  openHistoryModal: () => {},
  closeHistoryModal: () => {},
  todos: [],
  addTodo: () => {},
  completeTodo: () => {},
  deleteTodo: (id: number) => {},
  updateTodo: () => {},
  todoTitleInput: "",
  handleTodoTitleInput: () => {},
  todoDescriptionInput: "",
  handleTodoDescriptionInput: () => {},
});

export const TodosProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showTodosModal, setShowTodosModal] = useState<boolean>(false);
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoTitleInput, setTodoInput] = useState<string>("");
  const [todoDescriptionInput, setTodoDescriptionInput] = useState<string>("");

  useEffect(() => {
    getStorageData("todos").then((todos) => {
      if (todos) setTodos(todos);
    });
  }, []);

  useEffect(() => {
    setStorageData("todos", todos);
  }, [todos]);

  function openTodosModal() {
    setShowTodosModal(true);
  }

  function closeTodosModal() {
    setShowTodosModal(false);
  }

  function openHistoryModal() {
    setShowHistoryModal(true);
  }

  function closeHistoryModal() {
    setShowHistoryModal(false);
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
      createdAt: new Date().toLocaleDateString(),
      complete: false,
      id: generateUniqueId(todos),
    };

    setTodos((todos) => [...todos, todo]);
    handleTodoTitleInput("");
    handleTodoDescriptionInput("");
    closeTodosModal();
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              complete: true,
              completedAt: new Date().toLocaleDateString(),
            }
          : todo
      )
    );
  };

  const updateTodo = (updatedTodo: TodoItem) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <TodosContext.Provider
      value={{
        showTodosModal,
        openTodosModal,
        closeTodosModal,
        showHistoryModal,
        openHistoryModal,
        closeHistoryModal,
        todos,
        addTodo,
        deleteTodo,
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
