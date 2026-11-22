import { Stack } from "../ui";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, selectedTaskId, onSelectTask }) {
  return (
    <Stack>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isSelected={task.id === selectedTaskId}
          onSelect={onSelectTask}
        />
      ))}
    </Stack>
  );
}
