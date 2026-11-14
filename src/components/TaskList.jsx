import { Stack } from "../ui";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  selectedTaskId,
  onToggleTask,
  onDeleteTask,
  onSelectTask,
}) {
  return (
    <Stack>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isSelected={task.id === selectedTaskId}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
          onSelect={onSelectTask}
        />
      ))}
    </Stack>
  );
}
