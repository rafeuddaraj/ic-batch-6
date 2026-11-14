import { useState } from "react";
import { Stack, Row, Input, Button } from "../ui";
import { fakeSubmit } from "../utils/fakeSubmit";

export default function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  const isEmpty = title.trim() === "";
  const isSubmitting = status === "submitting";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fakeSubmit(title.trim());
      onAddTask(title.trim());
      setTitle("");
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
    setStatus("typing");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Row>
          <Input
            value={title}
            onChange={handleTitleChange}
            placeholder="নতুন কাজ"
            readOnly={isSubmitting}
          />
          <Button type="submit" disabled={isEmpty || isSubmitting}>
            {isSubmitting ? "যোগ হচ্ছে..." : "যোগ করুন"}
          </Button>
        </Row>
        {status === "success" && <p>কাজ যোগ হয়েছে</p>}
        {status === "error" && <p>{error}</p>}
      </Stack>
    </form>
  );
}
