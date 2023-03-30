import { createContext, useState, ReactNode } from "react";
import { TodoItem } from "../types";

interface todoContextData {
  todos: TodoItem[];
  addTodo: () => void;
  todoInput: string;
  handleTodoInput: (text: string) => void;
}

interface TodosProviderProps {
  children: ReactNode;
}

export const TodosContext = createContext({} as todoContextData);

export function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");

  function handleTodoInput(text: string) {
    setTodoInput(text);
  }

  function addTodo() {
    if (todoInput == "") {
      return;
    }

    const date = new Date();
    const formattedDate = date.toLocaleDateString();

    const newTodo = {
      title: todoInput,
      dateCreated: formattedDate,
    };
    handleTodoInput("");
    setTodos([...todos, newTodo]);
  }

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, todoInput, handleTodoInput }}
    >
      {children}
    </TodosContext.Provider>
  );
}
