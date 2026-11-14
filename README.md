# TaskFlow: Lesson 17

The TaskFlow project at the end of **Lesson 17: form status and structuring state**, from the [IC MERN Stack Career Path: Batch 6](https://github.com/rafeuddaraj/ic-batch-6) repository.

This branch continues from [`lesson-16`](https://github.com/rafeuddaraj/ic-batch-6/tree/lesson-16). All the code here is the finished result of the class.

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

## What changed since Lesson 16

To see every change in this class, compare the two branches:

```bash
git diff lesson-16 lesson-17
```

| File | Change |
|---|---|
| `src/utils/fakeSubmit.js` | **New.** Pretends to be a server: waits one second, then succeeds, or fails when the title is shorter than 3 characters. |
| `src/components/AddTaskForm.jsx` | The form now has a `status` (`"typing"`, `"submitting"`, `"success"` or `"error"`) and shows a message for each. |
| `src/components/TaskApp.jsx` | New state `selectedTaskId`. New calculated values `remainingCount` and `selectedTask`. |
| `src/components/TaskDetails.jsx` | **New.** Shows the selected task with a done or not-done badge. |
| `src/components/TaskList.jsx`, `TaskItem.jsx` | Each task gets a button to select it, highlighted when selected. |
| `src/components/TaskSummary.jsx` | Also shows the number of remaining tasks. |

## The core ideas of this class

**1. Think of the UI as a set of states, and keep one `status`.**
A form can be typing, submitting, successful or failed. Three separate booleans (`isSending`, `isSent`, `hasError`) can disagree with each other and describe a situation that cannot exist, such as "sending" and "sent" at the same time. One `status` value makes that impossible.

```jsx
const [status, setStatus] = useState("typing");
// "typing" | "submitting" | "success" | "error"
```

**2. If it can be calculated, it is not state.**
Values that come from other state or props are calculated while rendering, not stored. In this class: `isEmpty`, `isSubmitting`, `remainingCount` and `selectedTask`.

```jsx
const isSubmitting = status === "submitting";
const remainingCount = tasks.length - doneCount;
const selectedTask = tasks.find((task) => task.id === selectedTaskId);
```

**3. To remember a selection, store the id, not a copy of the object.**
A copy of the whole task goes out of date when the original changes. With only `selectedTaskId`, the selected task is always looked up from `tasks`, so there is one source of truth.

**4. (Optional) Reset a component's state with `key`.**
When the same component stays in the same place, React keeps its state. Giving it a different `key`, such as `key={contact.id}`, makes React start it fresh. The class shows this with a small chat example, which is not part of this branch's code.

## Project structure

```
src/
├── main.jsx
├── index.css              # @import "tailwindcss";
├── App.jsx                # <Page title="TaskFlow"><TaskApp /></Page>
├── components/
│   ├── TaskApp.jsx        # state: tasks, searchText, statusFilter, selectedTaskId
│   ├── SearchBar.jsx
│   ├── FilterTabs.jsx
│   ├── AddTaskForm.jsx    # state: title, status, error
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── TaskDetails.jsx
│   └── TaskSummary.jsx
├── utils/
│   └── fakeSubmit.js
├── data/
│   └── tasks.js           # UI kit: the four starting tasks
└── ui/                    # UI kit: Page, Stack, Row, Card, Button, Input, ...
```

`src/ui` and `src/data` come from the [`ui-kit` branch](https://github.com/rafeuddaraj/ic-batch-6/tree/ui-kit).

## Documentation

- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
- [Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)
- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)
- [`useState` reference](https://react.dev/reference/react/useState)

The text shown in the app (labels, placeholders, buttons, messages) is in Bengali, as in the video.
