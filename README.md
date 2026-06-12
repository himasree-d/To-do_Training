# MERN Todo App

A simple Todo application built using the MERN stack.

## Live Demo

[Click here to view the deployed app](https://to-dotrainingfrontend.vercel.app/)

## Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js

## Features

- Add todos
- View todos
- Delete todos

## Project Structure

```
MERN-Todo/
│
├── Backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── Frontend/
│   └── Notes/
│       ├── public/
│       │   ├── favicon.svg
│       │   └── icons.svg
│       │
│       ├── src/
│       │   ├── assets/
│       │   │   ├── hero.png
│       │   │   ├── react.svg
│       │   │   └── vite.svg
│       │   │
│       │   ├── App.jsx
│       │   ├── App.css
│       │   ├── index.css
│       │   └── main.jsx
│       │
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       ├── vite.config.js
│       └── eslint.config.js
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/himasree-d/To-do_Training/
cd MERN-Todo
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
node server.js
```

### Frontend Setup

Open another terminal:

```bash
cd Frontend/Notes
npm install
```

Run frontend:

```bash
npm run dev
```

## API Routes

| Method | Route | Description |
|---|---|---|
| GET | /api/todos | Get all todos |
| POST | /api/todos | Create todo |
| DELETE | /api/todos/:id | Delete todo |

## Future Improvements

- User authentication
- Better UI
- Due dates
- Todo categories

## Author

[Himasree Dintakurthy](https://github.com/himasree-d)

[Ishani Singh](https://github.com/I-S2506)
