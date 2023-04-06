import { StatusBar } from "react-native";

import { TodosProvider } from "src/contexts/TodosContext";
import Todos from "src/screens/Todos";
import colors from "tailwindcss/colors";

type Props = {};

export default function App({}: Props) {
  return (
    <TodosProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.gray[900]} />
      <Todos />
    </TodosProvider>
  );
}
