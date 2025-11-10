// Temporary in-memory database for users
// In production, this would be a real database like MongoDB or PostgreSQL

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "hashed_password_123" 
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "hashed_password_456"
  }
];

module.exports = users;
