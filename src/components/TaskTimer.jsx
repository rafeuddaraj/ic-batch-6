import { useRef, useState } from "react";
import { Row, Button } from "../ui";

export default function TaskTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function handleStart() {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");

  return (
    <Row>
      <span>
        {minutes}:{rest}
      </span>
      <Button
        variant="secondary"
        onClick={isRunning ? handleStop : handleStart}
      >
        {isRunning ? "থামান" : "শুরু"}
      </Button>
    </Row>
  );
}
