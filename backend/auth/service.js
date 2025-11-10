const users = require("./users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user) => {
  const payload = { id: user.id, email: user.email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};  

const validateUser = async (email, password) => {
  const user = users.find(user => user.email === email);
  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return null;
  }
  return user; 
};

const createUser = async (email, password, name) => {
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return null; 
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
    password: hashedPassword 
  };

  users.push(newUser);
  return newUser;
};

module.exports = { createToken, validateUser, createUser };
