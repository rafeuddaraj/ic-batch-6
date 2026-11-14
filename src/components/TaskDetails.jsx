import { Card, Badge } from "../ui";

export default function TaskDetails({ task }) {
  return (
    <Card>
      <h2>{task.title}</h2>
      <Badge tone={task.done ? "green" : "gray"}>
        {task.done ? "শেষ" : "বাকি"}
      </Badge>
    </Card>
  );
}
