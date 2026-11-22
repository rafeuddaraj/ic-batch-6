# TaskFlow: Lesson 18

The TaskFlow project at the end of **Lesson 18: useReducer**, from the [IC MERN Stack Career Path: Batch 6](https://github.com/rafeuddaraj/ic-batch-6) repository.

Watch the class: [https://youtu.be/Oz7TRb0GUxA](https://youtu.be/Oz7TRb0GUxA)

This branch continues from [`lesson-17`](https://github.com/rafeuddaraj/ic-batch-6/tree/lesson-17). All the code here is the finished result of the class.

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

## What changed since Lesson 17

To see every change in this class, compare the two branches:

```bash
git diff lesson-17 lesson-18
```

| File | Change |
|---|---|
| `src/state/tasksReducer.js` | **New.** One function that holds every rule for changing the task list: `added`, `toggled`, `deleted` and `cleared_completed`. |
| `src/components/TaskApp.jsx` | `tasks` now comes from `useReducer(tasksReducer, initialTasks)`. Each handler is a single `dispatch(...)` call. A new "clear completed" button was added. |

## The core ideas of this class

**1. The problem: the rules for changing the list are scattered.**
In `TaskApp`, every handler had its own `setTasks(...)` logic. Each new feature would add one more handler with more update logic.

**2. The analogy: a notebook and an accountant.**
The buttons and the form do not change the list themselves. They hand in a **slip** (an *action*) that says what happened. The **reducer** is the accountant: it takes the current state and the slip, and returns the new state.

**3. Action, dispatch and reducer.**

```jsx
// an action: an object that says what happened
dispatch({ type: "toggled", id });

// the reducer: current state + action → new state
export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [...tasks, { id: action.id, title: action.title, done: false }];
    case "toggled":
      return tasks.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );
    // ...
  }
}

// connecting them in the component
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```

**4. Rules for a reducer.**

- **Never change the state directly.** Return a new array. Calling `push` on `tasks` and returning it is the classic mistake: React sees the very same array, so the screen does not update, and the next update shows a duplicated task. In development, `StrictMode` runs reducers twice on purpose to help you catch this.
- **Handle unknown actions.** The `default` case throws an error, so a misspelled action type is caught immediately instead of silently doing nothing.
- **Only calculate.** No `Date.now()`, random numbers, network calls or timers inside a reducer. That is why the new task's `id` is created in the handler and sent in the action.

**5. useState or useReducer?**
Use `useState` for a simple value, or state that changes in one or two simple ways (`searchText`, `statusFilter`, `selectedTaskId`). Use `useReducer` when many kinds of events change the same state and you want all the rules together (`tasks`). Both can live in the same component, as they do in `TaskApp`. You can start with `useState` and move to `useReducer` later.

The class uses a small counter example to compare the two. It is only for learning and is not part of this branch's code.

## Project structure

```
src/
├── main.jsx
├── index.css              # @import "tailwindcss";
├── App.jsx                # <Page title="TaskFlow"><TaskApp /></Page>
├── components/
│   ├── TaskApp.jsx        # useReducer: tasks; useState: searchText, statusFilter, selectedTaskId
│   ├── SearchBar.jsx
│   ├── FilterTabs.jsx
│   ├── AddTaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── TaskDetails.jsx
│   └── TaskSummary.jsx
├── state/
│   └── tasksReducer.js
├── utils/
│   └── fakeSubmit.js
├── data/
│   └── tasks.js           # UI kit: the four starting tasks
└── ui/                    # UI kit: Page, Stack, Row, Card, Button, Input, ...
```

`src/ui` and `src/data` come from the [`ui-kit` branch](https://github.com/rafeuddaraj/ic-batch-6/tree/ui-kit).

## Documentation

- [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [`useReducer` reference](https://react.dev/reference/react/useReducer)
- [`useState` reference](https://react.dev/reference/react/useState)

The text shown in the app (labels, placeholders, buttons, messages) is in Bengali, as in the video.
