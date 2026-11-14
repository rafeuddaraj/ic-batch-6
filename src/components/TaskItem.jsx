import { Row, Checkbox, Button } from "../ui";

export default function TaskItem({
  task,
  isSelected,
  onToggle,
  onDelete,
  onSelect,
}) {
  return (
    <Row>
      <Checkbox
        label={task.title}
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />
      <Button
        variant={isSelected ? "primary" : "secondary"}
        onClick={() => onSelect(task.id)}
      >
        দেখুন
      </Button>
      <Button variant="danger" onClick={() => onDelete(task.id)}>
        মুছুন
      </Button>
    </Row>
  );
}
