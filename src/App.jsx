import { Page } from "./ui";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { TasksProvider } from "./context/TasksContext";
import TaskApp from "./components/TaskApp";

function ThemedPage() {
  const { theme } = useTheme();

  return (
    <Page title="TaskFlow" theme={theme}>
      <TaskApp />
    </Page>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TasksProvider>
        <ThemedPage />
      </TasksProvider>
    </ThemeProvider>
  );
}
