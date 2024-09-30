import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;

// Pseudocode for /api/todos endpoint
app.get("/api/todos", (req, res) => {
  // Lookup todos associated with req.user
  const userTodos = getUserTodos(req.user);

  // Return todos
  res.json(userTodos);
});

// Hardcoded data for demonstration purposes
const todos = [
  { id: uuidv4(), title: "Buy groceries" },
  { id: uuidv4(), title: "Walk the dog" },
  { id: uuidv4(), title: "Do laundry" },
];

// Helper function to get user-specific todos
function getUserTodos(user: any) {
  // In a real application, this would query a database
  return todos.filter((todo) => todo.userId === user.id);
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
