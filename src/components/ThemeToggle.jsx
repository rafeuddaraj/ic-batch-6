import { Button } from "../ui";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="secondary" onClick={toggleTheme}>
      {theme === "light" ? "ডার্ক মোড" : "লাইট মোড"}
    </Button>
  );
}
