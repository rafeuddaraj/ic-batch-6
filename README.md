# IC MERN Stack Career Path: Batch 6

Source code for the **IC MERN Stack Career Path, Batch 6** classes, taught by **Sumit Saha**.

Everything lives in this one repository. Each class has its own **branch** that holds the complete, runnable code exactly as it stands at the end of that class.

---

## Table of contents

1. [How this repository works](#how-this-repository-works)
2. [Branches](#branches)
3. [Get the code for a class](#get-the-code-for-a-class)
4. [Coding along: the UI kit](#coding-along-the-ui-kit)
5. [Requirements](#requirements)
6. [Missed a class?](#missed-a-class)
7. [Good to know](#good-to-know)

---

## How this repository works

| Branch | What it is |
|---|---|
| `main` | This overview. It has no project code. |
| `lesson-NN` | One branch per class (`lesson-16`, `lesson-17`, ...). The project code sits directly at the root of the branch, ready to install and run. |
| `ui-kit` | The prebuilt UI components and starter data that the classes use while coding along. |

A new `lesson-NN` branch is added as each class is released. Switch branches with the branch menu at the top left of the file list on GitHub, or with `git switch` on your machine.

---

## Branches

| Branch | Contents | Browse | Download |
|---|---|---|---|
| `lesson-16` | **TaskFlow** at the end of Lesson 16: Tailwind setup, Thinking in React and Lifting State Up | [Open branch](https://github.com/rafeuddaraj/ic-batch-6/tree/lesson-16) | [ZIP](https://github.com/rafeuddaraj/ic-batch-6/archive/refs/heads/lesson-16.zip) |
| `lesson-17` | **TaskFlow** at the end of Lesson 17: form status and structuring state | [Open branch](https://github.com/rafeuddaraj/ic-batch-6/tree/lesson-17) | [ZIP](https://github.com/rafeuddaraj/ic-batch-6/archive/refs/heads/lesson-17.zip) |
| `lesson-18` | **TaskFlow** at the end of Lesson 18: useReducer | [Open branch](https://github.com/rafeuddaraj/ic-batch-6/tree/lesson-18) | [ZIP](https://github.com/rafeuddaraj/ic-batch-6/archive/refs/heads/lesson-18.zip) |
| `lesson-19` | **TaskFlow** at the end of Lesson 19: Context + Reducer | [Open branch](https://github.com/rafeuddaraj/ic-batch-6/tree/lesson-19) | [ZIP](https://github.com/rafeuddaraj/ic-batch-6/archive/refs/heads/lesson-19.zip) |
| `lesson-20` | **TaskFlow** at the end of Lesson 20: Refs | [Open branch](https://github.com/rafeuddaraj/ic-batch-6/tree/lesson-20) | [ZIP](https://github.com/rafeuddaraj/ic-batch-6/archive/refs/heads/lesson-20.zip) |
| `ui-kit` | The `ui` and `data` folders for TaskFlow | [Open branch](https://github.com/rafeuddaraj/ic-batch-6/tree/ui-kit) | [ZIP](https://github.com/rafeuddaraj/ic-batch-6/archive/refs/heads/ui-kit.zip) |

---

## Get the code for a class

### Option 1: Download a ZIP (no Git needed)

Use the **ZIP** link of the branch in the table above. Unzip it, then:

```bash
cd the-unzipped-folder
npm install
npm run dev
```

You can also open the branch on GitHub and use **Code → Download ZIP**.

### Option 2: Clone just one branch

```bash
git clone --branch lesson-16 --single-branch https://github.com/rafeuddaraj/ic-batch-6.git lesson-16
cd lesson-16
npm install
npm run dev
```

### Option 3: Clone everything and switch between classes

```bash
git clone https://github.com/rafeuddaraj/ic-batch-6.git
cd ic-batch-6
git switch lesson-16
npm install
npm run dev
```

When you switch to another lesson branch, run `npm install` again, because the dependencies can differ between classes.

Open [http://localhost:5173](http://localhost:5173) in your browser once the dev server is running.

---

## Coding along: the UI kit

This course focuses on React, not on design. So the small UI components (Button, Input, Card and so on) are prebuilt and styled with Tailwind.

1. Download the [`ui-kit` branch as a ZIP](https://github.com/rafeuddaraj/ic-batch-6/archive/refs/heads/ui-kit.zip).
2. It contains two folders: `ui` and `data`.
3. Copy both into the `src/` folder of your project.

```
your-project/
└── src/
    ├── ui/      ← from the ui-kit branch
    ├── data/    ← from the ui-kit branch
    ├── App.jsx
    └── main.jsx
```

The `lesson-NN` branches already include these folders, so you do not need the UI kit to just run a class's code.

---

## Requirements

- **Node.js** 22.13 or newer (20.19 or newer also works)
- **npm** (comes with Node.js)
- A code editor such as VS Code
- **Git** (optional, only for the clone options)

---

## Missed a class?

Open that class's branch and run it. The code there is the finished result of the class, so you can continue from it or compare it with your own.

---

## Good to know

- The text shown inside the apps (labels, placeholders, buttons) is in Bengali, as in the videos. The code and file names are in English.
- Every lesson branch has its own short `README.md` with the commands and the file structure.
