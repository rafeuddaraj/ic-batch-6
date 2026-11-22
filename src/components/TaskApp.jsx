import { useState } from "react";
import { Stack, Row, Button } from "../ui";
import { useTasks, useTasksDispatch } from "../context/TasksContext";
import SearchBar from "./SearchBar";
import FilterTabs from "./FilterTabs";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import TaskSummary from "./TaskSummary";
import ThemeToggle from "./ThemeToggle";

export default function TaskApp() {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();
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

  return (
    <Stack>
      <Row>
        <SearchBar searchText={searchText} onSearchChange={setSearchText} />
        <ThemeToggle />
      </Row>
      <FilterTabs statusFilter={statusFilter} onFilterChange={setStatusFilter} />
      <AddTaskForm />
      <TaskList
        tasks={visibleTasks}
        selectedTaskId={selectedTaskId}
        onSelectTask={setSelectedTaskId}
      />
      {selectedTask && <TaskDetails task={selectedTask} />}
      <TaskSummary
        total={tasks.length}
        done={doneCount}
        remaining={remainingCount}
      />
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: "cleared_completed" })}
      >
        শেষ হওয়া কাজ মুছুন
      </Button>
    </Stack>
  );
}
