import { Row, Checkbox, Button } from "../ui";
import { useTasksDispatch } from "../context/TasksContext";

export default function TaskItem({ task, isSelected, onSelect }) {
  const dispatch = useTasksDispatch();

  return (
    <Row>
      <Checkbox
        label={task.title}
        checked={task.done}
        onChange={() => dispatch({ type: "toggled", id: task.id })}
      />
      <Button
        variant={isSelected ? "primary" : "secondary"}
        onClick={() => onSelect(task.id)}
      >
        দেখুন
      </Button>
      <Button
        variant="danger"
        onClick={() => dispatch({ type: "deleted", id: task.id })}
      >
        মুছুন
      </Button>
    </Row>
  );
}
