# TaskFlow: Lesson 20

The TaskFlow project at the end of **Lesson 20: Refs**, from the [IC MERN Stack Career Path: Batch 6](https://github.com/rafeuddaraj/ic-batch-6) repository.

This branch continues from [`lesson-19`](https://github.com/rafeuddaraj/ic-batch-6/tree/lesson-19). All the code here is the finished result of the class.

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

## What changed since Lesson 19

To see every change in this class, compare the two branches:

```bash
git diff lesson-19 lesson-20
```

| File | Change |
|---|---|
| `src/components/TaskTimer.jsx` | **New.** A stopwatch with a start/stop button. `seconds` and `isRunning` are state, and the interval id is kept in a ref. |
| `src/components/TaskItem.jsx` | Shows a `TaskTimer` next to every task. |
| `src/components/AddTaskForm.jsx` | After a task is added, the cursor goes back to the input with `inputRef.current.focus()`. |

## The core ideas of this class

**1. Two problems that state does not solve.**
After adding a task, the cursor does not come back to the input. And a stopwatch needs somewhere to keep the id returned by `setInterval`. One is about talking to a real browser element, the other about remembering a value that is never shown on the screen.

**2. A ref is a box that does not cause a render.**

```jsx
const countRef = useRef(0);

function handleRefClick() {
  countRef.current = countRef.current + 1;
}
```

| | Keeps its value between renders | Changing it renders again |
|---|---|---|
| A normal variable | No | No |
| State | Yes | Yes |
| Ref | Yes | No |

Do not read or write `ref.current` while a component is rendering. Do it in event handlers. If a value should appear on the screen, keep it in state.

**3. Focusing an input.**

```jsx
const inputRef = useRef(null);

// after the task is added
inputRef.current.focus();

<Input ref={inputRef} readOnly={isSubmitting} />
```

In React 19, `ref` is a normal prop, so your own components can accept it without `forwardRef`. The `Input` from the UI kit passes all its props to the real `<input>`, so it works as it is.

A `disabled` input cannot receive focus. `focus()` runs before React has rendered the new status, so with `disabled` the input would still be disabled at that moment. That is why the form uses `readOnly` while it is submitting.

**4. A stopwatch.**

```jsx
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
```

A normal variable cannot hold the interval id, because it is created again on every render and `clearInterval` would no longer get the right id. The updater function `current => current + 1` makes sure each tick adds to the latest number of seconds.

Each `TaskTimer` has its own state and its own ref, so several timers can run at the same time.

**5. Refs are an escape hatch.**
Use them for work outside React's rendering, such as focusing, scrolling, playing a video or keeping a timer id.

The class uses a small click counter to compare a variable, state and a ref. It is only for learning and is not part of this branch's code.

## What comes next

If you delete a task while its stopwatch is running, nothing stops the interval yet. The task list is also still written by hand instead of coming from an API. The next class solves both with Effects.

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
│   ├── TaskTimer.jsx
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

- [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)
- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
- [`useRef`](https://react.dev/reference/react/useRef)
