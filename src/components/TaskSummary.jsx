export default function TaskSummary({ total, done, remaining }) {
  return (
    <p>
      মোট {total}টি কাজ, শেষ {done}টি, বাকি {remaining}টি
    </p>
  );
}
