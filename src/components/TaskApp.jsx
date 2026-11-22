import { useReducer, useState } from "react";
import { Stack, Button } from "../ui";
import { initialTasks } from "../data/tasks";
import { tasksReducer } from "../state/tasksReducer";
import SearchBar from "./SearchBar";
import FilterTabs from "./FilterTabs";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import TaskSummary from "./TaskSummary";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const visibleTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "done" ? task.done : !task.done);
    return matchesSearch && matchesStatus;
  });
  const doneCount = tasks.filter((task) => task.done).length;
  const remainingCount = tasks.length - doneCount;
  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  function handleAddTask(title) {
    dispatch({ type: "added", id: Date.now(), title });
  }

  function handleToggleTask(id) {
    dispatch({ type: "toggled", id });
  }

  function handleDeleteTask(id) {
    dispatch({ type: "deleted", id });
  }

  function handleClearCompleted() {
    dispatch({ type: "cleared_completed" });
  }

  return (
    <Stack>
      <SearchBar searchText={searchText} onSearchChange={setSearchText} />
      <FilterTabs statusFilter={statusFilter} onFilterChange={setStatusFilter} />
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={visibleTasks}
        selectedTaskId={selectedTaskId}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onSelectTask={setSelectedTaskId}
      />
      {selectedTask && <TaskDetails task={selectedTask} />}
      <TaskSummary
        total={tasks.length}
        done={doneCount}
        remaining={remainingCount}
      />
      <Button variant="secondary" onClick={handleClearCompleted}>
        শেষ হওয়া কাজ মুছুন
      </Button>
    </Stack>
  );
}
