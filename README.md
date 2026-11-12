# TaskFlow: Lesson 16

The TaskFlow project at the end of **Lesson 16: Tailwind setup, Thinking in React and Lifting State Up**, from the [IC MERN Stack Career Path: Batch 6](https://github.com/rafeuddaraj/ic-batch-6) repository.

The app can add, toggle and delete tasks, and search and filter them. All the code in this branch is the finished result of the class.

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

Node.js 22.13 or newer is required (20.19 or newer also works).

## Project structure

```
src/
├── main.jsx               # entry: StrictMode, createRoot, imports index.css
├── index.css              # @import "tailwindcss";
├── App.jsx                # <Page title="TaskFlow"><TaskApp /></Page>
├── components/
│   ├── TaskApp.jsx        # state lives here: tasks, searchText, statusFilter
│   ├── SearchBar.jsx
│   ├── FilterTabs.jsx
│   ├── AddTaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── TaskSummary.jsx
├── data/
│   └── tasks.js           # UI kit: the four starting tasks
└── ui/                    # UI kit: Page, Stack, Row, Card, Button, Input, ...
```

`src/ui` and `src/data` come from the [`ui-kit` branch](https://github.com/rafeuddaraj/ic-batch-6/tree/ui-kit).

```
App
└── Page
    └── TaskApp                ← state: tasks, searchText, statusFilter
        ├── SearchBar          ← searchText, onSearchChange
        ├── FilterTabs         ← statusFilter, onFilterChange
        ├── AddTaskForm        ← onAddTask (keeps its own small state: title)
        ├── TaskList           ← tasks (visibleTasks), onToggleTask, onDeleteTask
        │   └── TaskItem       ← task, onToggle, onDelete
        └── TaskSummary        ← total, done
```

## Building it from scratch (as in the class)

```bash
npm create vite@latest taskflow -- --template react
```

Answer the prompts with **ESLint** for the linter and **No** for "Install with npm and start now?".

```bash
cd taskflow
npm install
npm install tailwindcss @tailwindcss/vite
npm run dev
```

Add the plugin to `vite.config.js`:

```js
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Put this single line in `src/index.css`:

```css
@import "tailwindcss";
```

Then copy the `ui` and `data` folders from the [`ui-kit` branch](https://github.com/rafeuddaraj/ic-batch-6/tree/ui-kit) into `src/`.

## The core idea of this class

> **Data flows down (props), events go up (functions).**
> **When several components need the same data, the state lives in their closest common parent, and every piece of state has exactly one owner.**

The five steps of [Thinking in React](https://react.dev/learn/thinking-in-react), applied to TaskFlow:

1. Break the mockup into components.
2. Build a static version first (props only, no state).
3. Find the minimal state: `tasks`, `searchText`, `statusFilter`. The filtered list and the done count are calculated from them, so they are not state.
4. Decide where the state lives: in `TaskApp`, the closest common parent.
5. Add inverse data flow: `onAddTask`, `onToggleTask` and `onDeleteTask` are passed down as functions.

## Versions used

| Package | Version |
|---|---|
| React / React DOM | 19.3.1 |
| Vite | 8.3.7 |
| `@vitejs/plugin-react` | 6.3.0 |
| Tailwind CSS / `@tailwindcss/vite` | 4.3.5 |
| ESLint | 10.14.0 |

`package-lock.json` is included, so `npm install` gives you exactly these versions.

## Documentation

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
- [Tailwind CSS: install with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Vite guide](https://vite.dev/guide/)

The text shown in the app (labels, placeholders, buttons) is in Bengali, as in the video.
