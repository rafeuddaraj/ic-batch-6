export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, title: action.title, done: false }];
    }
    case "toggled": {
      return tasks.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "cleared_completed": {
      return tasks.filter((task) => !task.done);
    }
    default: {
      throw Error("অজানা action: " + action.type);
    }
  }
}
