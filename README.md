# TaskFlow: Lesson 19

The TaskFlow project at the end of **Lesson 19: Context + Reducer**, from the [IC MERN Stack Career Path: Batch 6](https://github.com/rafeuddaraj/ic-batch-6) repository.

This branch continues from [`lesson-18`](https://github.com/rafeuddaraj/ic-batch-6/tree/lesson-18). All the code here is the finished result of the class.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build (`dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code with ESLint |

Node.js 22.13 or newer is required (20.19 or newer also works). No new packages were added in this class.

## What changed since Lesson 18

To see every change in this class, compare the two branches:

```bash
git diff lesson-18 lesson-19
```

| File | Change |
|---|---|
| `src/context/ThemeContext.jsx` | **New.** `ThemeProvider` holds the light/dark theme. `useTheme()` reads it. |
| `src/context/TasksContext.jsx` | **New.** `TasksProvider` runs `useReducer` and shares `tasks` and `dispatch` through two contexts. `useTasks()` and `useTasksDispatch()` read them. |
| `src/components/ThemeToggle.jsx` | **New.** A button that switches between light and dark mode. |
| `src/App.jsx` | Wraps the app in `ThemeProvider` and `TasksProvider`. |
| `src/components/TaskApp.jsx` | No more handlers passed down. It reads `tasks` and `dispatch` from context. |
| `src/components/TaskList.jsx` | Only receives `tasks`, `selectedTaskId` and `onSelectTask`. |
| `src/components/TaskItem.jsx` | Calls `dispatch` itself for toggle and delete. |
| `src/components/AddTaskForm.jsx` | Calls `dispatch` itself to add a task. |
| `eslint.config.js` | Turns off `react-refresh/only-export-components` for `src/context/`, because a context file exports both a provider and a hook. |

## The core ideas of this class

**1. The problem: prop drilling.**
Handlers such as `onToggleTask` and `onDeleteTask` travelled `TaskApp → TaskList → TaskItem`. The middle component only passed them along. Every new feature made the list of props longer.

**2. Context in three steps.**

```jsx
// 1. create the context
const ThemeContext = createContext(null);

// 2. provide a value from above
<ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>

// 3. read it from any component below
const { theme, toggleTheme } = useContext(ThemeContext);
```

In React 19 you write `<ThemeContext value={...}>` directly. The old `.Provider` is not needed.

**3. Where the provider sits decides who gets the value.**
A component gets the value from the **closest provider above it**. A component outside the provider does not receive the value and only sees the default one (`null` here). That is why `useTheme()` fails with `Cannot destructure property 'theme' ...` if you forget to wrap the app.

**4. Context + Reducer together.**
`tasks` and `dispatch` live in two separate contexts:

```jsx
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
```

Any component can now call `useTasksDispatch()` and send an action. Nothing has to be passed through the components in between.

**5. When not to use context.**
Do not put everything in context. First ask whether props or `children` can solve it. Use context when many components, far apart, need the same thing, such as the theme, the current user or the task list.

**6. One owner for the state.**
The state has one owner (`TasksProvider`). Every other component only reads it or sends an action.

The class also uses small throwaway examples (a themed button, a toolbar and a nested heading) to explain context. They are only for learning and are not part of this branch's code.

## Project structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── AddTaskForm.jsx
│   ├── FilterTabs.jsx
│   ├── SearchBar.jsx
│   ├── TaskApp.jsx
│   ├── TaskDetails.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   ├── TaskSummary.jsx
│   └── ThemeToggle.jsx
├── context/
│   ├── TasksContext.jsx
│   └── ThemeContext.jsx
├── data/tasks.js
├── state/tasksReducer.js
├── ui/            (prebuilt UI kit)
└── utils/fakeSubmit.js
```

## Learn more

- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
- [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [`createContext`](https://react.dev/reference/react/createContext)
- [`useContext`](https://react.dev/reference/react/useContext)
