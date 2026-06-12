# MERN Todo App

A simple Todo application built using the MERN stack.

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
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <your-repository-url>
cd MERN-Todo
```

### Backend Setup

```bash
cd backend
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
cd frontend
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

[Himasree Dintakurthy] ([https:/](https://github.com/himasree-d)
