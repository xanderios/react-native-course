import { TodosProvider } from "./src/contexts/TodosContext";
import Todos from "./src/screens/Todos";

type Props = {};

export default function App({}: Props) {
  return (
    <TodosProvider>
      <Todos />
    </TodosProvider>
  );
}
